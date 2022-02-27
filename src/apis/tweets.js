import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  createTweet(tweet) {
    return apiHelper.post(
      "/tweets",
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
  getTweet(tweetId) {
    return apiHelper.get(`/tweets/${tweetId}`, {
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
  deleteLike(tweetId) {
    return apiHelper.post(`/tweets/${tweetId}/unlike`, null, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
};
