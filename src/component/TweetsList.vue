<template>
  <div class="tweet-container">
    <div class="tweet">
      <div class="tweet__user-avatar" style="background-image: url('https://via.placeholder.com/50x50/DFDFDF?text=No+Image');">
      </div>
      <div class="tweet__info-container">
        <div class="info">
          <span class="name">Apple</span>
          <span class="account">apple・3 小時</span>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing ...</p>
          </div>
        </div>
        <div v-if="isUserMain" class="tweet__footer">
          <div class="tweet__footer__actives">
              <div class="tweet__footer__actives__tweets">
                <img class="actives-icon" src="../../public/image/icon/message.svg" alt="">
                <span class="tweet__footer__actives__count">13</span>
              </div>
              <div class="tweet__footer__actives__like">
                <img class="actives-icon" src="../../public/image/icon/like.svg" alt="">
                <span class="tweet__footer__actives__count">76</span>
              </div>
          </div>
        </div>
        <div v-if="!isUserMain" class="delete">
          <span class="delete"></span>
        </div>
      </div>
    </div>
    <div class="tweet">
      <div class="user-avatar" style="background-image: url('https://via.placeholder.com/50x50/DFDFDF?text=No+Image');">
      </div>
      <div class="info-container">
        <div class="info">
          <span class="name">Apple</span>
          <span class="account">apple・3 小時</span>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing ...</p>
          </div>
        </div>
        <div class="delete">
          <span class="delete"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isUserMain: true
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
      margin-right: 5px;
      font-weight: 700;
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
      padding-left: 15px;
      div.tweet__footer__actives {
        display: flex;
        img.actives-icon {
          width: 13px;
          height: 13px;
        }
        span {
          color: $text-sub;
        }
      }
      div.delete {
        span { 
          &::before {
            position: absolute;
            top: 11px;
            right: 19px;
            content: "\2717";
            color: $text-sub;
          }
          &:hover::before {
            color: $brand-orange;
          }
        }
      }
    }
  }
</style>