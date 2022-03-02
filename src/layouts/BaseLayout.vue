<template>
  <div class="page-container">
    <Navbar class="container-left" :is-current-user-page="isCurrentUserPage" @after-show-modal="afterShowModal"/>
    <div class="container-middle"><Header /><router-view class="container-middle-main" /></div>
    <PopularUsers class="container-right" v-if="!isAdmin" />
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
    TweetModal
  },
  data() {
    return {
      modalVisibility: false,
      isCurrentUserPage: false
    }
  },
  computed: {
    ...mapState(["isAdmin", "currentUser"])
  },
  methods: {
    afterShowModal() {
      this.modalVisibility = true
    },
    afterCloseModal() {
      this.modalVisibility = false
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('this.isCurrentUserPage', this.isCurrentUserPage)
    console.log('Number(to.params.user_id)', Number(to.params.user_id))
    console.log('t/f', Number(to.params.user_id) === this.currentUser.id)
    this.isCurrentUserPage = Number(to.params.user_id) === this.currentUser.id
    console.log('this.isCurrentUserPage 2', this.isCurrentUserPage)
    // console.log('userID:' , to.params.user_id)
    // console.log('true false:' , Number(to.params.user_id) === this.currentUser.id)
    // if (Number(to.params.user_id) === this.currentUser.id) {
    //   this.isCurrentUserPage = Number(to.params.user_id) === this.currentUser.id
    // } else {
    //   this.isCurrentUserPage = false
    // }
    next()
  }
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
