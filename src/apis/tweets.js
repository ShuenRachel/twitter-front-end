import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  createTweet(tweet) {
    return apiHelper.post(
      "/admin/tweets",
      { description: tweet },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
  },
  getAllTweets() {
    return apiHelper.get("/tweets", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  addLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/like`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
};
