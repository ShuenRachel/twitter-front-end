<template>
  <div>
    <TweetsList v-for="tweet in tweetsData" :key="tweet.id" :init-tweet-data="tweet"/>
  </div>
</template>

<script>
import TweetsList from "@/components/TweetsList.vue"
// import tweetsAPI from "./../apis/tweets"
export default {
  components: {
    TweetsList
  },
  data() {
    return {
      tweetsData: [{
        id: 1
      },{
        id: 2
      },{
        id: 3
      },]
    }
  },
  methods: {
    // async fetchTweets() {
    //   try {
    //     const response = await tweetsAPI
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  },
  created() {
    // this.fetchTweets()
  }
}
</script>
