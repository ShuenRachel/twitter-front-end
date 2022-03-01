import { apiHelper } from "../utils/helpers";

export default {
  getCurrentUser() {
    return apiHelper.get("/users/get_current_user");
  },
  getUser(userId) {
    return apiHelper.get(`/users/${userId}`);
  },
  getUserTweets(userId) {
    return apiHelper.get(`/users/${userId}/tweets`);
  },
  getUserReplies(userId) {
    return apiHelper.get(`/users/${userId}/replied_tweets`);
  },
  getUserLike(userId) {
    return apiHelper.get(`/users/${userId}/likes`);
  },
  getTopUsers() {
    return apiHelper.get("/users/top");
  },
  getFollowings(userId) {
    return apiHelper.get(`/users/${userId}/followings`);
  },
  getFollowers(userId) {
    return apiHelper.get(`/users/${userId}/followers`);
  },
  addFollowing(userId) {
    return apiHelper.post(
      `/followships`,
      { id: userId }
    );
  },
  deleteFollowing(userId) {
    return apiHelper.delete(`/followships/${userId}`);
  },
  updateSetting(user_id, formData) {
    return apiHelper.put(
      `/users/${user_id}/edit`,
      { ...formData }
    );
  },
  updateUserProfile( {user_id, formData } ) {
    return apiHelper.put(
      `/users/${user_id}`,
      formData
    );
  }
};
