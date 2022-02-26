<template>
  <div class="page-container">
    <Navbar class="container-left" @after-show-modal="afterShowModal"/>
    <div class="container-middle"><Header /><router-view class="container-middle-main" /></div>
    <PopularUsers class="container-right" v-if="!isAdmin" />
    <TweetModal v-if="modalVisibility" />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Header from "@/components/Header.vue";
import PopularUsers from "@/components/PopularUsers.vue";
import TweetModal from "@/components/TweetModal.vue";
import { mapState } from "vuex";

export default {
  components: {
    Navbar,
    Header,
    PopularUsers,
    TweetModal
  },
  data() {
    return {
      modalVisibility: false
    }
  },
  computed: {
    ...mapState(["isAdmin"])
  },
  methods: {
    afterShowModal() {
      this.modalVisibility = true
    }
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
