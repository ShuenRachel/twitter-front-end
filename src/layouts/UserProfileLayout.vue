<template>
  <div>
    <UserProfile :user-id="userId"/>
    <NavTabs />
    <router-view />
  </div>
</template>

<script>
import UserProfile from "@/components/UserProfile.vue"
import NavTabs from "@/components/NavTabs.vue"

export default {
  components: {
    UserProfile,
    NavTabs
  },
  data() {
    return {
      userId: this.$route.params.user_id,
      tweetsData: []
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.userId = to.params.user_id
    next()
  },
}
</script>
