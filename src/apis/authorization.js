import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
  userLogin(loginData) {
    return apiHelper.post("/users/signin", loginData);
  },
  adminLogin(loginData) {
    return apiHelper.post("/admin/login", loginData);
  },
  userRegister(registerData) {
    return apiHelper.post("/users", { ...registerData });
  },
  getAllUsers() {
    return apiHelper.get("/admin/users", {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    });
  }
};