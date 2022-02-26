<template>
  <div class="header">
    <div class="header-btn">
      <svg
        width="17"
        height="14"
        viewBox="0 0 17 14"
        fill="black"
        xmlns="http://www.w3.org/2000/svg"
        v-show="backArrowVisibility"
        @click="$router.push('/user/home')"
      >
        <path
          d="M16 5.99988H3.41399L7.70699 1.70687C8.09699 1.31687 8.09699 0.683875 7.70699 0.292875C7.31699 -0.0981249 6.68399 -0.0971249 6.29299 0.292875L0.292988 6.29288C-0.0970117 6.68288 -0.0970117 7.31588 0.292988 7.70687L6.29299 13.7069C6.48799 13.9019 6.74299 13.9999 6.99999 13.9999C7.25699 13.9999 7.51199 13.9019 7.70699 13.7069C8.09699 13.3169 8.09699 12.6839 7.70699 12.2929L3.41399 7.99988H16C16.553 7.99988 17 7.55288 17 6.99988C17 6.44688 16.553 5.99988 16 5.99988Z"
          fill="black"
        />
      </svg>
    </div>
    <div class="header-title">
      <div class="header-title-page">{{ title }}</div>
      <div class="header-title-tweet" v-show="isUser">
        {{ viewUser.tweetCount }} 推文
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
      backArrowVisibility: false
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
          this.backArrowVisibility = false;
          return "推文清單";
        case "admin-users":
          this.isUser = false;
          this.backArrowVisibility = false;
          return "使用者列表";
        case "user-setting":
          this.isUser = false;
          this.backArrowVisibility = false;
          return "帳戶設定";
        case "user-home":
          this.isUser = false;
          this.backArrowVisibility = false;
          return "首頁";
        case "user-tweet":
          this.isUser = false;
          this.backArrowVisibility = true;
          return "推文";
        default:
        case "user-all-tweets":
        case "user-all-replies":
        case "user-all-like":
        case "user-followers":
        case "user-followings":
          this.isUser = true;
          this.backArrowVisibility = true;
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
  display: flex;
  align-items: center;
  &-btn {
    width: 80px;
    svg {
      margin-left: 19px;
    }
  }
  &-title {
    display: flex;
    flex-flow: column nowrap;
    &-page {
      font-size: 19px;
      font-weight: 700;
      color: $text-main;
    }
    &-tweet {
      font-size: 13px;
      font-weight: 500;
      color: $text-sub;
    }
  }
}
</style>
