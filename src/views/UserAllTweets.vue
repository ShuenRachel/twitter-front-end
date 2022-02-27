<template>
  <div class="user-all-tweets">
    <UserProfile :user-id="userId" />
    <NavTabs />
    <TweetsList
      v-for="tweet in tweetsData"
      :key="tweet.id"
      :init-tweet-data="tweet" />
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs.vue";
import UserProfile from '../components/UserProfile.vue'
import TweetsList from '../components/TweetsList.vue'
import usersAPI from '../apis/users'

export default {
  components: { 
    UserProfile,
    NavTabs,
    TweetsList
  },
  created() {
    this.fetchTweets(Number(this.userId))
  },
  data() {
    return {
      userId: this.$route.params.user_id,
      tweetsData: []
    }
  },
  methods: {
    async fetchTweets(userId) {
      try {
        const response = await usersAPI.getUserTweets(userId)
  
        if (response.statusText !== 'OK') {
          throw new Error('status: '+ response.status)
        }

        this.tweetsData = response.data;
        console.log(this.tweetsData)
      } catch (error) {
        console.log(error)
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.userId = to.params.user_id
    next()
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
