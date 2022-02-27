<template>
  <div class="user-follower-container">
    <section class="follow-nav-tab">
      <NavTabs />
    </section>
    <section class="follow-list">
      <FollowList v-for="user in followersData" :key="user.followerId" :init-user="user" />
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
      followersData: [],
    };
  },
  methods: {
    async fetchFollowers(id) {
      try {
        const response = await usersAPI.getFollowers(id);

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }
        console.log(response.data);
        this.followersData = response.data;
      } catch (error) {
        console.log(error);
      }
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
