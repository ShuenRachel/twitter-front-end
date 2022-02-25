<template>
  <div class="page-container">
    <Navbar class="container-left" />
    <div class="container-middle"><Header /><router-view class="container-middle-main" /></div>
    <PopularUsers class="container-right" v-if="!isAdmin" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import PopularUsers from "@/components/PopularUsers.vue";
import { mapState } from "vuex";

export default {
  components: {
    Navbar,
    Header,
    PopularUsers,
  },
  computed: {
    ...mapState(["isAdmin"])
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.page-container {
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  justify-content: space-between;
  .container {
    &-left {
      flex-basis: 379px;
      height: 100vh;
    }
    &-middle {
      flex-grow: 1;
    }
    &-right {
      flex-basis: 463px;
      height: 100vh;
    }
  }
}
</style>
