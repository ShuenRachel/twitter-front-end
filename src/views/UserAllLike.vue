<template>
  <div class="user-all-like">
    <TweetsList 
      v-for="tweet in tweetsData"
      :key="tweet.id"
      :init-tweet-data="tweet" />
    <div class="empty-data" v-if="isLikeEmpty">目前尚無喜歡的內容</div>
  </div>
</template>

<script>
import TweetsList from '../components/TweetsList.vue'
import usersAPI from '../apis/users'
import { Toastification } from "./../utils/mixin";

export default {
  mixins: [Toastification],
  components: { 
    TweetsList
  },
  created() {
    this.fetchTweets(Number(this.userId))
  },
  data() {
    return {
      userId: this.$route.params.user_id,
      tweetsData: [],
      isLikeEmpty: false
    }
  },
  methods: {
    async fetchTweets(userId) {
      try {
        const response = await usersAPI.getUserLike(userId)
  
        if (response.statusText !== 'OK') {
          throw new Error('status: '+ response.status)
        } else if (response.data.length === 0) {
          this.tweetsData= [] // 切換到喜歡的內容為空的使用者要先把 tweetsData 清空。
          this.isLikeEmpty = true
          throw new Error('status: '+ response.data.status + ', message: ' + response.data.message)
        }
        console.log(response.data)
        this.tweetsData = response.data
        this.isLikeEmpty = false
      } catch (error) {
        this.ToastError({
          title: "無法取得用戶讚好清單，請稍後再試",
        });
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.userId = to.params.user_id
    this.fetchTweets(Number(this.userId))
    next()
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
