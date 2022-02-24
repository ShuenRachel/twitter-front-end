import { apiHelper } from "../utils/helpers";
// const getToken = () => localStorage.getItem('token')

export default {
  signIn(loginData) {
    return apiHelper.post("/admin/signin", loginData);
  },
};