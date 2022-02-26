import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  getAllUsers() {
    return apiHelper.get("/admin/users", {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    });
  }
};