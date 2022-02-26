<template>
  <div class="user-follower-container">
    <section class="follow-nav-tab">
      <NavTabs />
    </section>
    <section class="follow-list">
      <FollowList />
    </section>
  </div>
</template>

<script>
import NavTabs from "../components/NavTabs";
import FollowList from "../components/FollowList.vue";

export default {
  components: {
    NavTabs,
    FollowList,
  },
};
</script>
