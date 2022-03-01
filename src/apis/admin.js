import { apiHelper } from "../utils/helpers";

export default {
  getAllUsers() {
    return apiHelper.get("/admin/users");
  },
  getAllTweets() {
    return apiHelper.get("/tweets");
  },
  deleteTweet(tweetId) {
    return apiHelper.delete(`/admin/tweets/${tweetId}`);
  },
};