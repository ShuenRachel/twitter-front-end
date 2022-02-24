import { apiHelper } from "../utils/helpers";

export default {
  userLogin(loginData) {
    console.log("loginData", loginData);
    return apiHelper.post("/users/signin", loginData);
  },
  adminLogin(loginData) {
    return apiHelper.post("/admin/signin", loginData);
  },
};