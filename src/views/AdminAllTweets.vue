<template>
  <div class="admin">
    <section class="admin-tweets">
      <TweetsList
        v-for="tweet in tweetsData"
        :key="tweet.id"
        :init-tweet-data="tweet"
        @after-delete-clicked="deleteTweet"
       />
    </section>
  </div>
</template>

<script>
import TweetsList from '../components/TweetsList.vue'
import adminAPI from '../apis/admin'
import { Toastification } from "./../utils/mixin";

export default {
  mixins: [Toastification],
  components: {
    TweetsList,
  },
  created() {
    this.fetchTweets()
  },
  data() {
    return {
      tweetsData: []
    }
  },
  methods: {
    async fetchTweets() {
      try {
        const response = await adminAPI.getAllTweets()
        
        if (response.statusText !== 'OK') {
          throw new Error('status: '+ response.status)
        }

        this.tweetsData = response.data

      } catch (error) {
        this.ToastError({
          title: "無法取得推文資料，請稍後再試",
        });
      }
    },
    async deleteTweet(tweetId) {
      console.log('delete tweetId:', tweetId)
      try {
        const response = await adminAPI.deleteTweet(tweetId)

        if (response.data.status !== 'success') {
          throw new Error('status: '+ response.status)
        }

        this.fetchTweets()

      } catch (error) {
        this.ToastError({
          title: "無法刪除推文，請稍後再試",
        });
      }
    } 
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main.scss";
  
  section.admin-tweets {
    border-top: $border-setting;
  }

</style>