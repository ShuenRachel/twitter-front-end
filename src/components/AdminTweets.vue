<template>
  <div class="tweet-container">
    <div class="tweet">
      <div class="img">
        <img src="https://via.placeholder.com/50x50/DFDFDF?text=No+Image" alt="">
      </div>
      <div class="info-container">
        <div class="info">
          <span class="name">Apple</span>
          <span class="account">apple・3 小時</span>
          <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing ...</div>
        </div>
        <div class="delete">
          <span class="delete"></span>
        </div>
      </div>
    </div>
    <div class="tweet">
      <div class="img">
        <img src="https://via.placeholder.com/50x50/DFDFDF?text=No+Image" alt="">
      </div>
      <div class="info-container">
        <div class="info">
          <span class="name">Apple</span>
          <span class="account">apple・3 小時</span>
          <div class="content">Lorem ipsum dolor sit amet, consectetur adipiscing ...</div>
        </div>
        <div class="delete">
          <span class="delete"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import "../assets/scss/main.scss";
  div.tweet {
    position: relative;
    display: flex;
    padding: 12px 15px;
    text-align: left;
    color: $text-main;
    border-bottom: 1px solid $border;
    div.img {
      img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
      }
    }
    span.name {
      margin-right: 5px;
      font-weight: 700;
    }
    span.account {
      color: $text-sub;
      &::before {
        content: "@";
      }
    }
    div.info-container {
      padding-left: 15px;
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