<template>
  <div>
    <TweetsList :init-tweets-data="tweetsData" />
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
      tweetsData: []
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
