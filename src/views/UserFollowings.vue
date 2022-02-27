<template>
  <div class="user-follower-container">
    <section class="follow-nav-tab">
      <NavTabs />
    </section>
    <section class="follow-list">
      <FollowList v-for="user in followingsData" :key="user.followingId" :init-user="user" />
    </section>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import FollowList from "../components/FollowList.vue";
import usersAPI from "./../apis/users";

export default {
  components: {
    NavTabs,
    FollowList,
  },
  data() {
    return {
      followingsData: [],
    };
  },
  methods: {
    async fetchFollowings(id) {
      try {
        const response = await usersAPI.getFollowings(id);

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }
        console.log(response.data);
        this.followingsData = response.data;
      } catch (error) {
        console.log(error);
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
