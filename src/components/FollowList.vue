<template>
  <div class="follow-list">
    <div class="tweet">
      <div class="avatar-container">
        <div
          class="tweet__user-avatar"
          style="
            background-image: url('https://via.placeholder.com/50x50/DFDFDF?text=No+Image');
          "
        ></div>
      </div>
      <div class="tweet__info-container">
        <div class="info">
          <span class="name">{{ user.name }}</span>
          <span class="account">{{ user.account }}</span>
          <div class="content">
            <p>
              {{ user.introduction }}
            </p>
          </div>
        </div>
        <div class="follow-ship">
          <button
            v-if="user.isFollowing"
            class="following"
            :disabled="isProcessing || user.id === currentUser.id"
            @click.stop.prevent="deleteFollowing(user.id)"
          >
            正在跟隨
          </button>
          <button
            v-else
            class="follow"
            :disabled="isProcessing || user.id === currentUser.id"
            @click.stop.prevent="addFollowing(user.id)"
          >
            跟隨
          </button>
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
  mixins: [Toastification],
  props: {
    initUser: {
      type: Object,
    },
  },
  data() {
    return {
      user: {},
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    fetchUser() {
      if (this.initUser.followerId) {
        this.user = this.initUser;
        this.user.id = this.initUser.followerId;
      } else if (this.initUser.followingId) {
        this.user = this.initUser;
        this.user.id = this.initUser.followingId;
      }
      return;
    },
    async addFollowing(userId) {
      this.isProcessing = true;
      try {
        const response = await usersAPI.addFollowing(userId);

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }

        this.user.isFollowing = true;
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
        this.isProcessing = false;
        this.$emit("after-follow-change")
      } catch (error) {
        this.ToastError({
          title: "無法取消追隨用戶，請稍後再試",
        });
        this.isProcessing = false;
      }
    },
  },
  created() {
    this.fetchUser();
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
div.tweet {
  position: relative;
  display: flex;
  padding: 12px 15px;
  text-align: left;
  color: $text-main;
  font-size: 15px;
  border-bottom: 1px solid $border;
  span.name {
    font-weight: 700;
  }
  .avatar-container {
    width: 65px;
  }
  &__user-avatar {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-color: $empty-img;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
  }
  &__info-container {
    padding-left: 10px;
    max-width: 575px;
    .info {
      display: flex;
      flex-direction: column;
    }
    .follow-ship {
      position: absolute;
      top: 10px;
      right: 15px;
      button.following,
      button.follow {
        border-radius: 100px;
      }
      button.following {
        width: 90px;
        height: 25px;
        background-color: $brand-orange;
        color: #fff;
        font-weight: bold;
      }
      button.follow {
        width: 62px;
        height: 30px;
        color: $brand-orange;
        font-weight: 700;
        border: 1px solid $brand-orange;
      }
    }
  }
}
</style>
