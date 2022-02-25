<template>
  <div class="popular-panel">
    <div class="popular-wrapper">
      <div class="popular-heading">Popular</div>
      <div class="popular-users">
        <div class="popular-user" v-for="user in users" :key="user.id">
          {{ user.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await usersAPI.getTopUsers();
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }

        this.users = data

      } catch (error) {

        console.log(error);
      }
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.popular-panel {
  border-left: $border-setting;
  .popular-wrapper {
    width: 350px;
    height: 750px;
    border-radius: 14px;
    background: $card-fill;
    margin-top: 15px;
    margin-left: 30px;
  }
}

.popular {
  &-heading {
    padding-top: 10px;
    padding-left: 15px;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
