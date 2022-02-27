<template>
  <div>
    <Tweet />
  </div>
</template>

<script>
import Tweet from "@/components/Tweet.vue";
import tweetsAPI from "./../apis/tweets";

export default {
  components: {
    Tweet,
  },
  data() {
    return {
      tweetId: "",
      description: "",
      createdAt: "",
      tweetUserName: "",
      avatar: "",
      repliedCount: -1,
      likeCount: 0,
      liked: false,
      replies: [],
    };
  },
  methods: {
    async fetchTweet(id) {
      try {
        const response = await tweetsAPI.getTweet(id);
        const { data } = response;
        const {
          TweetId: tweetId,
          description,
          createdAt,
          tweetUserName,
          avatar,
          repliedCount,
          likeCount,
          liked,
          replies,
        } = data;

        this.tweetId = tweetId
        this.description = description
        this.createdAt = createdAt
        this.tweetUserName = tweetUserName
        this.avatar = avatar
        this.repliedCount = repliedCount
        this.likeCount = likeCount
        this.liked = liked
        this.replies = replies
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    const { tweet_id } = this.$route.params;
    this.fetchTweet(tweet_id);
  },
};
</script>
