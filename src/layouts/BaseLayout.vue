<template>
  <div class="page-container">
    <Navbar
      class="container-left"
      :is-current-user-page="isCurrentUserPage"
      @after-show-modal="afterShowModal"
    />
    <div class="container-middle">
      <Header /><router-view
        class="container-middle-main"
        @after-follow-change="afterFollowChange"
      />
    </div>
    <PopularUsers class="container-right" v-if="!isAdmin && currentPathName !== 'user-setting'" :need-update-popular-user="needUpdatePopularUser" />
    <TweetModal v-if="modalVisibility" @after-close-modal="afterCloseModal" />
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
    TweetModal,
  },
  data() {
    return {
      modalVisibility: false,
      isCurrentUserPage: false,
      needUpdatePopularUser: false
    };
  },
  computed: {
    ...mapState(["isAdmin", "currentUser", "currentPathName"]),
  },
  methods: {
    afterShowModal() {
      this.modalVisibility = true;
    },
    afterCloseModal() {
      this.modalVisibility = false;
    },
    afterFollowChange() {
      this.needUpdatePopularUser = !this.needUpdatePopularUser
    },
  },
  beforeRouteUpdate(to, from, next) {
    this.isCurrentUserPage = Number(to.params.user_id) === this.currentUser.id;
    next();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.page-container {
  display: flex;
  flex-flow: row nowrap;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
  .container {
    &-left {
      flex-basis: 379px;
      height: 100vh;
    }
    &-middle {
      flex-grow: 1;
      height: 100vh;
      &-main {
        overflow-y: scroll;
        height: 93vh;
      }
    }
    &-right {
      flex-basis: 463px;
      height: 100vh;
    }
  }
}
</style>
