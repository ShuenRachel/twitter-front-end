import { apiHelper } from "../utils/helpers";

export default {
  createTweet(tweet) {
    return apiHelper.post(
      "/tweets",
      { description: tweet }
    );
  },
  getAllTweets() {
    return apiHelper.get("/tweets");
  },
  getTweet(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}`);
  },
  getReplies(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}/replies`);
  },
  addLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/like`, null);
  },
  deleteLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`, null);
  },
  postReply(tweetId, reply) {
    return apiHelper.post(
      `/tweets/${tweetId}/replies`,
      { comment: reply }
    );
  },
};
