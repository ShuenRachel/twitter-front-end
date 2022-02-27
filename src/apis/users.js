import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getUser(userId) {
    return apiHelper.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    })
  },
  getUserTweets(userId) {
    return apiHelper.get(`/users/${userId}/tweets`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  getUserReplies(userId) {
    return apiHelper.get(`/users/${userId}/replied_tweets`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  getUserLike(userId) {
    return apiHelper.get(`/users/${userId}/likes`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  getTopUsers() {
    return apiHelper.get("/users/top", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  addFollowing(userId) {
    return apiHelper.post(
      `/followships`,
      { id: userId },
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );
  },
  deleteFollowing(userId) {
    return apiHelper.delete(`/followships/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  updateSetting(user_id, formData) {
    return apiHelper.put(
      `/users/${user_id}`,
      { ...formData },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
  },
};
