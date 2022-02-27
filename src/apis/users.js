import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  getCurrentUser() {
    return apiHelper.get("/users/get_current_user", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  getUser(userId) {
    return apiHelper.get(`/users/${userId}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  getUserTweets(userId) {
    return apiHelper.get(`/users/${userId}/tweets`, {
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
  getFollowings(userId) {
    return apiHelper.get(`/users/${userId}/followings`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
  getFollowers(userId) {
    return apiHelper.get(`/users/${userId}/followers`, {
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
