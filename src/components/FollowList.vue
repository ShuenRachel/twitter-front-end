<template>
  <div class="follow-list">
    <div class="tweet">
      <div class="avatar-container">
        <div class="tweet__user-avatar"
        style="background-image: url('https://via.placeholder.com/50x50/DFDFDF?text=No+Image');">
        </div>
      </div>
      <div class="tweet__info-container">
        <div class="info">
          <span class="name">Apple</span>
          <span class="account">apple</span>
          <div class="content">
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
          </div>
        </div>
        <div class="follow-ship">
          <button v-if="isFollowing" class="following">正在跟隨</button>
          <button v-else class="follow">跟隨</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFollowing: true
    }
  }
}
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
      button.following, button.follow {
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
