import { apiHelper } from "../utils/helpers";
const getToken = () => localStorage.getItem("token");

export default {
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
