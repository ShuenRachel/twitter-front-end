<template>
  <div class="user-profile-container">
    <!--  TODO? 切版時 再把backgroundImage的設定放下去style -->
    <div
      class="user-profile-cover"
      :style="{ backgroundImage: 'url(' + user.cover + ')' }"
    ></div>
    <div class="user-profile-avatar">
      <img :src="user.avatar" alt="" />
    </div>
    <div class="user-profile-info-container">
      <div class="user-name">
        <p>{{ user.name }}</p>
      </div>
      <div class="user-account">
        <span class="account">{{ user.account }}</span>
      </div>
      <div class="user-introduction">
        <p>{{ user.introduction }}</p>
      </div>
      <div class="user-follow">
        <div class="user-follow-followings">
          <router-link
            :to="{ name: 'user-followings', params: { user_id: user_id } }"
            ><span>{{ user.followingCount }} 個</span>跟隨中</router-link
          >
        </div>
        <div class="user-follow-followers">
          <router-link
            :to="{ name: 'user-followers', params: { user_id: user_id } }"
            ><span>{{ user.followerCount }} 位</span>跟隨者</router-link
          >
        </div>
      </div>
      <div v-if="currentUser.id === user_id" class="user-edit btn-ps">
        <button
          @click.stop.prevent="showEditModal"
          class="user-edit btn btn-white profile-btn"
        >
          編輯個人資料
        </button>
      </div>
      <div v-if="currentUser.id !== user_id" class="user-is-follow btn-ps">
        <button
          v-if="user.isFollowing"
          class="following btn btn-orange profile-btn"
          :disabled="isProcessing"
          @click.stop.prevent="deleteFollowing(user_id)"
        >
          正在跟隨
        </button>
        <button
          v-else
          class="follow btn btn-white profile-btn"
          :disabled="isProcessing"
          @click.stop.prevent="addFollowing(user_id)"
        >
          跟隨
        </button>
      </div>
    </div>
    <UserEditModal
      v-if="modalVisibility"
      :init-user-id="user_id"
      :init-user-cover="user.cover"
      :init-user-avatar="user.avatar"
      :init-user-name="user.name"
      :init-user-introduction="user.introduction"
      @after-close-modal="afterCloseModal"
      @after-edit-success="afterEditSuccess"
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
    this.user_id = Number(this.userId);
    this.fetchUserProfile(this.userId);
  },
  data() {
    return {
      user_id: 0,
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
      isProcessing: false,
    };
  },
  methods: {
    async fetchUserProfile(userId) {
      try {
        const response = await usersAPI.getUser(userId);
        const { data } = response;

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
    async addFollowing(userId) {
      this.isProcessing = true;
      try {
        const response = await usersAPI.addFollowing(userId);

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }

        this.user.isFollowing = true;
        this.user.followingCount += 1;
        this.isProcessing = false;
        this.$emit("after-follow-change")
      } catch (error) {
        this.ToastError({
          title: "無法追隨用戶，請稍後再試",
        });
        this.isProcessing = false;
      }
    },
    async deleteFollowing(userId) {
      this.isProcessing = true;
      try {
        const response = await usersAPI.deleteFollowing(userId);

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }

        this.user.isFollowing = false;
        this.user.followingCount -= 1;
        this.isProcessing = false;
        this.$emit("after-follow-change")
      } catch (error) {
        this.ToastError({
          title: "無法取消追隨用戶，請稍後再試",
        });
        this.isProcessing = false;
      }
    },
    showEditModal() {
      this.modalVisibility = true;
    },
    afterCloseModal() {
      this.modalVisibility = false;
    },
    afterEditSuccess() {
      this.fetchUserProfile(Number(this.userId));
      this.$store.dispatch("fetchCurrentUser");
    },
  },
  watch: {
    userId(newValue) {
      this.fetchUserProfile(Number(newValue));
      this.user_id = Number(newValue);
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
    min-width: 200px;
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
  &-info-container {
    position: relative;
    padding: 0 15px;
    font-size: 14px;
    div.user-name {
      margin-top: 69px;
      font-weight: 900;
      font-size: 19px;
      line-height: 27.5px;
    }
    div.user-account {
      font-size: 15px;
    }
    div.user-introduction {
      margin: 10px 0;
    }
    div.user-follow {
      display: flex;
      &-followings {
        margin-right: 20px;
      }
      &-followings,
      &-followers {
        a {
          text-decoration: none;
          color: $text-sub;
          font-weight: 400;
          span {
            color: $text-main;
            font-weight: 500;
          }
        }
      }
    }
    div.user-edit {
      button {
        width: 120px;
      }
    }
    div.btn-ps {
      position: absolute;
      top: calc(-69px + 10px);
      right: 15px;
      button.profile-btn {
        font-size: 15px;
        font-weight: 700;
        height: 35px;
      }
    }
    div.user-is-follow {
      button.follow {
        width: 60px;
      }
      button.following {
        width: 90px;
      }
    }
  }
}
</style>
