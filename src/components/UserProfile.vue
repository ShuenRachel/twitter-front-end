<template>
  <div class="user-profile-container">
    <!-- 切版時 再把backgroundImage的設定放下去style -->
    <div
      class="user-profile-cover"
      :style="{ backgroundImage: 'url(' + user.cover + ')' }"
    ></div>
    <div class="user-profile-avatar">
      <img :src="user.avatar" alt="" />
    </div>
    <div>{{ user.name }}</div>
    <div>@{{ user.account }}</div>
    <div>{{ user.introduction }}</div>
    <div>
      <router-link
        :to="{ name: 'user-followings', params: { user_id: user_id } }"
        ><span>{{ user.followingCount }} 個</span>跟隨中</router-link
      >
    </div>
    <div>
      <router-link
        :to="{ name: 'user-followers', params: { user_id: user_id } }"
        ><span>{{ user.followerCount }} 位</span>跟隨者</router-link
      >
    </div>
    <button @click.stop.prevent="showEditModal" class="user-edit">
      編輯個人資料
    </button>
    <div class="follow-ship">
      <button v-if="user.isFollowing" class="following">正在跟隨</button>
      <button v-else class="follow">跟隨</button>
    </div>
    <div style="border: 1px solid red">
      test currentUser >> currentUserId: {{ currentUser.id }}, currentUserName:
      {{ currentUser.name }}.
    </div>
    <UserEditModal
      v-if="modalVisibility"
      :init-user-id="user_id"
      :init-user-cover="user.cover"
      :init-user-avatar="user.avatar"
      :init-user-name="user.name"
      :init-user-introduction="user.introduction"
      @after-close-modal="afterCloseModal"
    />
  </div>
</template>

<script>
import usersAPI from "../apis/users";
import UserEditModal from "../components/UserEditModal.vue";
import { mapState } from "vuex";
import { Toastification } from "./../utils/mixin";

export default {
  mixins: [Toastification],
  components: {
    UserEditModal,
  },
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  created() {
    this.user_id = this.userId;
    this.fetchUserProfile(Number(this.userId));
  },
  data() {
    return {
      user_id: "",
      user: {
        account: "",
        name: "",
        avatar: "",
        cover: "",
        introduction: "",
        followingCount: 0,
        followerCount: 0,
        isFollowing: false,
      },
      modalVisibility: false,
    };
  },
  methods: {
    async fetchUserProfile(userId) {
      try {
        const response = await usersAPI.getUser(userId);
        const { data } = response;

        console.log("--new user--");
        console.log(data);

        if (response.statusText !== "OK") {
          throw new Error("status: " + response.status);
        }
        this.user = {
          account: data.account,
          name: data.name,
          avatar: data.avatar,
          cover: data.cover,
          introduction: data.introduction,
          followingCount: data.followingCount,
          followerCount: data.followerCount,
          isFollowing: data.isFollowing,
        };
      } catch (error) {
        this.ToastError({
          title: "無法取得用戶資料，請稍後再試",
        });
      }
    },
    showEditModal() {
      this.modalVisibility = true;
    },
    afterCloseModal() {
      this.modalVisibility = false;
      this.$router.push({
        name: "user-all-tweets",
        params: { user_id: this.userId },
      });
    },
  },
  watch: {
    userId(newValue) {
      this.fetchUserProfile(Number(newValue));
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

div.user-profile {
  &-container {
    position: relative;
    max-width: 598px;
  }
  &-cover {
    width: 598px;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
  }
  &-avatar {
    position: absolute;
    top: 124px;
    left: 15px;
    width: 140px;
    height: 140px;
    img {
      width: 100%;
      border: 4px solid #ffffff;
      border-radius: 50%;
    }
  }
}
</style>
