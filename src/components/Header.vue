<template>
  <div class="header">
    <div class="header-btn"></div>
    <div class="header-title">
      <div class="header-title-page">{{ title }}</div>
      <div class="header-title-tweet" v-show="isUser">
        {{ viewUser.tweetCount }}推文
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      isUser: false,
    };
  },
  computed: {
    ...mapState(["currentPathName", "viewUser"]),
    title() {
      return this.handlePathName();
    },
  },
  methods: {
    handlePathName() {
      switch (this.currentPathName) {
        case "admin-tweets":
          this.isUser = false;
          return "推文清單";
        case "admin-users":
          this.isUser = false;
          return "使用者列表";
        case "user-setting":
          this.isUser = false;
          return "帳戶設定";
        case "user-home":
          this.isUser = false;
          return "首頁";
        case "user-tweet":
          this.isUser = false;
          return "推文";
        default:
        case "user-all-tweets":
        case "user-all-replies":
        case "user-all-like":
        case "user-followers":
        case "user-followings":
          this.isUser = true;
          return this.viewUser.name;
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
