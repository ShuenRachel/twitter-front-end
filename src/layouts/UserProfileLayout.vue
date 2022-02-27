<template>
  <div>
    <UserProfile />
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
  }
}
</script>
