<template>
  <div class="user-container">
    <div v-for="user in users" :key="user.id" class="user-card">
      <div class="user-card__background" :style="{ backgroundImage: 'url(' + user.cover + ')' }"></div>
      <div class="user-card__avatar" :style="{ backgroundImage: 'url(' + user.avatar + ')' }" ></div>
      <div class="user-card__info">
        <div class="user-card__info__name">
          <span class="name">{{ user.name }}</span>
        </div>
        <div class="user-card__info__account">
          <span class="account">{{ user.account }}</span>
        </div>
        <div class="user-card__info__actives">
          <div class="user-card__info__actives__tweets">
            <img class="actives-icon" src="../../public/image/icon/message.svg" alt="">
            <span class="user-card__info__actives__count">15</span>
          </div>
          <div class="user-card__info__actives__like">
            <img class="actives-icon" src="../../public/image/icon/like.svg" alt="">
            <span class="user-card__info__actives__count">20</span>
          </div>
        </div>
        <div class="user-card__info__follow">
          <span>
            <span class="user-card__info__follow__count">34 個</span>跟隨中
          </span>
          <span>
            <span class="user-card__info__follow__count">59 位</span>跟隨者
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    initialUsers: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      users: this.initialUsers
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main.scss";
  div.user-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 15px;
     div.user-card {
      position: relative;
      width: 245px;
      height: 314px;
      background-color: $card-bg-color;
      border-radius: 10px;
      &__background {
        width: 100%;
        height: 140px;
        border-radius: 10px 10px 0 0;
      }
      &__avatar {
        position: absolute;
        top: 68px;
        left: calc(50% - 50px);
        width: 100px;
        height: 100px;
        border: 4px solid $bg-white;
        border-radius: 50%;
      }
      &__avatar, &__background {
        background-color: $empty-img;
        background-position: 50%;
        background-repeat: no-repeat;
        background-size: cover;
      }
      &__info {
        width: 100%;
        height: 174px;
        font-size: 15px;
        color: $text-main;
        text-align: center;
        padding: 33px 0 21px;
        font-weight: 500;
        &__name {
          font-weight: 900;
        }
        &__account {
          color: $text-sub;
        }
        &__actives {
          width: 100%;
          display: inline-flex;
          justify-content: center;
          gap: 17px;
          padding: 17px 0;
          img.actives-icon {
            width: 20px;
            height: 20px;
          }
          &__tweets, &__like {
            display: flex;
            span {
              margin-left: 7px;
            }
          }
        }
        &__follow {
          color: $text-sub;
          font-size: 14px;
          font-weight: 400;
          span.user-card__info__follow__count{
            font-weight: 500;
            color: $text-main;
          }
        }
      }
    }
  }
</style>