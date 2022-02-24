import { apiHelper } from "../utils/helpers";

export default {
  signIn (loginData) {
    console.log('loginData', loginData)
    return apiHelper.post("/users/signin", loginData);
  }
}