<template>
  <div class="admin">
    <section class="users-card">
      <AdminUsers :users="users" />
    </section>
  </div>
</template>

<script>
import AdminUsers from '../components/AdminUsers.vue'
import authorizationAPI from "./../apis/authorization";

export default {
  created() {
    this.fetchUsers()
  },
  components: {
    AdminUsers,
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    async fetchUsers() {
      const response = await authorizationAPI.getAllUsers()
      const { data } =response
      this.users = data
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main.scss";

  section.users-card {
    padding: 15px;
  }
</style>