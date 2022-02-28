<template>
  <div class="admin">
    <section class="users-card">
      <AdminUsers :users="users" />
    </section>
  </div>
</template>

<script>
import AdminUsers from '../components/AdminUsers.vue'
import adminAPI from "./../apis/admin";

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
      try {
        const response = await adminAPI.getAllUsers()
        const { data } = response
        this.users = data
        console.log(this.users)
      } catch(error) {
        console.log('error: ', error);
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main.scss";

  section.users-card {
    padding: 15px;
    border-top: $border-setting;
  }
</style>