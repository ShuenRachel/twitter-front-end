import { apiHelper } from "../utils/helpers";

export default {
  signIn (loginData) {
    return apiHelper.post("/users/signin", loginData);
  }
}