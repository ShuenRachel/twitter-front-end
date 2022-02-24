<template>
  <div class="admin">
    <section class="users-card">
      <AdminUsers />
    </section>
  </div>
</template>

<script>
import AdminUsers from '../component/AdminUsers.vue'

export default {
  components: {
    AdminUsers,
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main.scss";

  section.users-card {
    padding: 15px;
  }
</style>