<template>
  <div class="user-follower-container">
    <section class="follow-nav-tab">
      <NavTabs />
    </section>
    <section class="follow-list">
      <FollowList
        v-for="user in followingsData"
        :key="user.followingId"
        :init-user="user"
      />
      <div class="empty-data" v-if="isEmptyData">目前尚無跟隨中</div>
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
      followingsData: [],
      isEmptyData: false
    };
  },
  methods: {
    async fetchFollowings(id) {
      try {
        const response = await usersAPI.getFollowings(id);

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }

        this.followingsData = response.data;
        this.isEmptyData = !this.followingsData.length
      } catch (error) {
        this.ToastError({
          title: "無法取得用戶追隨中清單，請稍後再試",
        });
      }
    },
  },
  created() {
    const { user_id } = this.$route.params;
    this.fetchFollowings(user_id);
  },
  beforeRouteUpdate(to, from, next) {
    const user_id = to.params.user_id;
    this.fetchFollowings(user_id);
    next();
  },
};
</script>
