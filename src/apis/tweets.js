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
};
