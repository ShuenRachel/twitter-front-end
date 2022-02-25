<template>
  <div class="navbar-panel">
    <div class="nav-wrapper">
      <div class="nav-icon"><img src="/image/logo.svg" alt="" srcset="" /></div>
      <div class="nav-content" v-if="isAdmin">
        <div class="link-wrapper">
          <router-link class="route-link" to="/admin/tweets"
            >推文清單</router-link
          >
          <router-link class="route-link" to="/admin/tweets"
            >使用者列表</router-link
          >
        </div>
      </div>
      <div class="nav-content" v-else>
        <div class="link-wrapper">
          <router-link class="route-link" to="/user/home">首頁</router-link>
          <!-- TODO add active class when viewing personal profile -->
          <router-link
            class="route-link"
            :to="{
              name: 'user-all-tweets',
              params: { user_id: currentUser.id },
            }"
            >個人資料</router-link
          >
          <router-link class="route-link" to="/user/setting">設定</router-link>
          <button class="btn btn-orange">推文</button>
        </div>
      </div>
      <div class="nav-footer">登出</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      isAdmin: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.navbar-panel {
  border-right: $border-setting;
  .nav-wrapper {
    margin-left: 113px;
    margin-right: 55px;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
  }
}

.nav {
  &-icon {
    width: 30px;
    height: 30px;
    margin-top: 14px;
    margin-bottom: 45px;
  }
  &-content {
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    .link-wrapper {
      display: flex;
      flex-flow: column nowrap;
      .route-link {
        font-weight: 700;
        font-size: 18px;
        color: $text-main;
        &.active,
        &:hover {
          color: $brand-orange;
        }
      }
    }
  }
  &-footer {
  }
}
</style>
