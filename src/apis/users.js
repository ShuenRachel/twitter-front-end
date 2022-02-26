import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  getTopUsers() {
    return apiHelper.get("/users/top", {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  },
};
