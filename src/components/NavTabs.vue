<template>
  <div class="nav-tab-container">
    <div v-if="isFollowPage" class="nav-tab">
      <router-link class="nav-link" :to="{ name: 'user-followers' }">
        <span class="nav-tab">跟隨者</span>
      </router-link>
    </div>
    <div v-if="isFollowPage" class="nav-tab">
      <router-link class="nav-link" :to="{ name: 'user-followings' }">
        <span class="nav-tab">正在跟隨</span>
      </router-link>
    </div>
    <div v-if="!isFollowPage" class="nav-tab">
      <router-link class="nav-link" :to="{ name: 'user-all-tweets' }">
        <span class="nav-tab">推文</span>
      </router-link>
    </div>
    <div v-if="!isFollowPage" class="nav-tab">
      <router-link class="nav-link" :to="{ name: 'user-all-replies' }">
        <span class="nav-tab">推文與回覆</span>
      </router-link>
    </div>
    <div v-if="!isFollowPage" class="nav-tab">
      <router-link class="nav-link" :to="{ name: 'user-all-like' }">
        <span class="nav-tab">喜歡的內容</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  created() {
    this.handlePathName()
  },
  data() {
    return {
      isFollowPage: true,
      isProfilePage: false,
    }
  },
  computed: {
    ...mapState(["currentPathName"])
  },
  methods: {
    handlePathName() {
      switch (this.currentPathName) {
        case "user-followers":
        case "user-followings":
          this.isProfilePage = false
          this.isFollowPage = true;
          break;
        case "user-all-tweets":
        case "user-all-replies":
        case "user-all-like":
          this.isFollowPage = false;
          this.isProfilePage = true;
          break;
      }
    }
  },
  watch: {
    currentPathName: function(){
      this.handlePathName()
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main.scss";
  div.nav-tab-container {
    display: flex;
    border-bottom: 1px solid $border-color;
    .nav-link {
      width: 130px;
      height: 50px;
      font-size: 15px;
      font-weight: 700;
      color: $text-sub;
      text-align: center;
      padding: 15px 0;
    }
    .active {
      border-bottom: 2px solid $brand-orange;
      span {
        color: $brand-orange;
      }
    }
  }
</style>