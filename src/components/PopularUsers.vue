<template>
  <div class="popular-panel">
    <div class="popular-wrapper">
      <div class="popular-heading">Popular</div>
      <div class="popular-users">
        <div class="popular-user" v-for="user in users" :key="user.id">
          <div class="popular-user-avatar">
            <img
              :src="user.avatar"
              alt=""
              @click.stop.prevent="toUserProfilePage(user.id)"
            />
          </div>
          <div class="popular-user-details">
            <span
              class="name"
              @click.stop.prevent="toUserProfilePage(user.id)"
              >{{ user.name }}</span
            >
            <span
              class="account"
              @click.stop.prevent="toUserProfilePage(user.id)"
              >{{ user.account }}</span
            >
          </div>
          <div class="popular-user-follow-button">
            <button
              v-if="user.isFollowing"
              class="popular-user-btn btn btn-orange btn-following"
              :disabled="user.isProcessing"
              @click.stop.prevent="deleteFollowing(user.id)"
            >
              正在跟隨
            </button>
            <button
              v-else
              class="popular-user-btn btn btn-white btn-follow"
              @click.stop.prevent="addFollowing(user.id)"
              :disabled="user.isProcessing"
            >
              跟隨
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import usersAPI from "./../apis/users";
import { Toastification } from "./../utils/mixin";
import { mapState } from "vuex";

export default {
  data() {
    return {
      users: [],
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await usersAPI.getTopUsers();
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }
        this.users = data.map((user) => {
          return {
            ...user,
            isProcessing: false,
          };
        });
      } catch (error) {
        this.ToastError({
          title: "無法取得人氣用戶資料，請稍後再試",
        });
      }
    },
    async addFollowing(userId) {
      if (userId === this.currentUser.id) {
        return this.ToastError({
          title: "不能追隨自己",
        });
      }

      const targetUser = this.users.find((user) => user.id === userId);

      targetUser.isProcessing = true;

      try {
        this.isProcessing = true;
        const response = await usersAPI.addFollowing(userId);

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }

        targetUser.isFollowing = true;
        targetUser.isProcessing = false;
      } catch (error) {
        this.ToastError({
          title: "無法追隨用戶，請稍後再試",
        });
        targetUser.isProcessing = false;
      }
    },
    async deleteFollowing(userId) {
      const targetUser = this.users.find((user) => user.id === userId);

      targetUser.isProcessing = true;
      try {
        const response = await usersAPI.deleteFollowing(userId);

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }

        targetUser.isFollowing = false;
        targetUser.isProcessing = false;
      } catch (error) {
        this.ToastError({
          title: "無法取消追隨用戶，請稍後再試",
        });
        targetUser.isProcessing = false;
      }
    },
    toUserProfilePage(userId) {
      this.$router.push({
        name: "user-all-tweets",
        params: { user_id: userId },
      });
    },
  },
  created() {
    this.fetchUsers();
  },
  mixins: [Toastification],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.popular-panel {
  border-left: $border-setting;
  overflow: scroll;
  height: 100vh;
  .popular-wrapper {
    min-width: 300px;
    max-width: 350px;
    overflow-y: scroll;
    border-radius: 14px;
    background: $card-fill;
    margin: 15px 30px;
  }
}

.popular {
  &-heading {
    padding: 10px 0 9px 15px;
    font-size: 18px;
    font-weight: 700;
  }
}

.popular-users {
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  .popular-user {
    position: relative;
    padding: 10px 15px;
    border-top: $border-setting;
    display: flex;
    align-items: center;
    &-avatar {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      background-color: $empty-img;
      margin-right: 10px;
      cursor: pointer;
      img {
        display: block;
        width: 100%;
        border-radius: 50%;
      }
    }
    &-details {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      span:nth-child(1) {
        margin-bottom: 3px;
      }
    }
    &-follow-button {
      position: absolute;
      top: 10px;
      right: 15px;
      button {
        font-size: 15px;
        font-weight: 700;
      }
      button.btn-follow {
        width: 60px;
        height: 35px;
      }
      button.btn-following {
        width: 90px;
        height: 35px;
      }
    }
  }
}
</style>
