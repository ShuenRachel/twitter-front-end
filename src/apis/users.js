import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
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
};
