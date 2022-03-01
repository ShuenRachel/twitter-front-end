<template>
  <div class="popular-panel">
    <div class="popular-wrapper">
      <div class="popular-heading">Popular</div>
      <div class="popular-users">
        <div class="popular-user" v-for="user in users" :key="user.id">
          <div class="popular-user-avatar">
            <img :src="user.avatar" alt="" />
          </div>
            <div class="popular-user-details">
              <span class="name">{{ user.name }}</span>
              <span class="account">{{ user.account }}</span>
            </div>
            <div class="popular-user-follow-button">
              <button
                v-if="user.isFollowing"
                class="popular-user-btn btn btn-orange btn-following"
                @click.stop.prevent="deleteFollowing(user.id)"
              >
                正在跟隨
              </button>
              <button
                v-else
                class="popular-user-btn btn btn-white btn-follow"
                @click.stop.prevent="addFollowing(user.id)"
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

        this.users = data;
      } catch (error) {
        console.log(error);
      }
    },
    async addFollowing(userId) {
      try {
        this.isProcessing = true;
        const response = await usersAPI.addFollowing(userId);

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            user.isFollowing = true;
          }
          return user;
        });
      } catch (error) {
        // TODO error alert
        console.log(error);
      }
    },
    async deleteFollowing(userId) {
      try {
        const response = await usersAPI.deleteFollowing(userId);

        if (response.statusText !== "OK") {
          throw new Error(response.message);
        }

        this.users = this.users.map((user) => {
          if (user.id === userId) {
            user.isFollowing = false;
          }
          return user;
        });
      } catch (error) {
        // TODO error alert
        console.log(error);
      }
    },
    toUserProfilePage(userId) {
      this.$router.push({ name: 'user', params: { username: 'eduardo' } })
    }
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
  overflow: scroll;
  height: 100vh;
  .popular-wrapper {
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
      img {
        display: block;
        width: 100%;
        border-radius: 50%;
      }
    }
    &-details {
      display: flex;
      flex-direction: column;
      span:nth-child(1){
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
