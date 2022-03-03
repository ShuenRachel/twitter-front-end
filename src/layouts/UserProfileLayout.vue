<template>
  <div>
    <UserProfile :user-id="userId" @after-follow-change="afterFollowChange" />
    <NavTabs />
    <router-view />
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue";
import NavTabs from "@/components/NavTabs.vue";

export default {
  components: {
    UserProfile,
    NavTabs,
  },
  data() {
    return {
      userId: this.$route.params.user_id,
      tweetsData: [],
    };
  },
  methods: {
    afterFollowChange() {
      this.$emit("after-follow-change")
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.userId = to.params.user_id;
    next();
  },
};
</script>
