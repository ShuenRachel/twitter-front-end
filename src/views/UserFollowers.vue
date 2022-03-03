<template>
  <div class="user-follower-container">
    <section class="follow-nav-tab">
      <NavTabs />
    </section>
    <section class="follow-list">
      <FollowList
        v-for="user in followersData"
        :key="user.followerId"
        :init-user="user"
        @after-follow-change="afterFollowChange"
      />
      <div class="empty-data" v-if="isEmptyData">目前尚無跟隨者</div>
    </section>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import FollowList from "../components/FollowList.vue";
import usersAPI from "./../apis/users";
import { Toastification } from "./../utils/mixin";

export default {
  mixins: [Toastification],
  components: {
    NavTabs,
    FollowList,
  },
  data() {
    return {
      followersData: [],
      isEmptyData: false,
    };
  },
  methods: {
    async fetchFollowers(id) {
      try {
        const response = await usersAPI.getFollowers(id);

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }
        this.followersData = response.data;
        this.isEmptyData = !this.followersData.length;
      } catch (error) {
        this.ToastError({
          title: "無法取得用戶追隨者清單，請稍後再試",
        });
      }
    },
    afterFollowChange() {
      this.$emit("after-follow-change");
    },
  },
  created() {
    const { user_id } = this.$route.params;
    this.fetchFollowers(user_id);
  },
  beforeRouteUpdate(to, from, next) {
    const user_id = to.params.user_id;
    this.fetchFollowers(user_id);
    next();
  },
};
</script>
