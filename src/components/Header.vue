<template>
  <div class="header">
    <div class="header-btn"></div>
    <div class="header-title">
      <div class="header-title-page">{{ title }}</div>
      <div class="header-title-tweet"></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  computed: {
    ...mapState(["currentPathName"]),
    title() {
      switch (this.currentPath) {
        case "admin-tweets":
          return "推文清單";
        case "admin-users":
          return "使用者列表";
        case "user-setting":
          return "帳戶設定";
        case "user-home":
          return "首頁";
        case "user-tweet":
          return "推文";
        default:
        case "user-all-tweets":
        case "user-all-replies":
        case "user-all-like":
        case "user-followers":
        case "user-followings":
          return "login user";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.header {
  height: 55px;
}
</style>
