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
          <div class="user-card__info__actives__tweetsCount">
            <svg class="actives-icon__tweetsCount" width="20" height="20" viewBox="0 0 21 20" fill="#657786" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.8461 0.241934L8.69812 0.231934H8.69612C4.32212 0.231934 0.896118 3.65893 0.896118 8.03393C0.896118 12.1319 4.08212 15.2399 8.36112 15.4039V19.2319C8.36112 19.3399 8.40512 19.5179 8.48112 19.6349C8.62312 19.8599 8.86512 19.9819 9.11312 19.9819C9.25112 19.9819 9.39012 19.9439 9.51512 19.8639C9.77912 19.6959 15.9881 15.7239 17.6031 14.3579C19.5051 12.7479 20.6431 10.3879 20.6461 8.04593V8.02893C20.6401 3.66193 17.2161 0.241933 12.8461 0.240933V0.241934ZM16.6331 13.2139C15.4991 14.1739 11.7711 16.6189 9.86112 17.8569V14.6699C9.86112 14.2559 9.52612 13.9199 9.11112 13.9199H8.71512C5.05512 13.9199 2.39712 11.4439 2.39712 8.03393C2.39712 4.49993 5.16512 1.73193 8.69712 1.73193L12.8441 1.74193H12.8461C16.3781 1.74193 19.1461 4.50793 19.1481 8.03793C19.1451 9.94793 18.2061 11.8819 16.6341 13.2139H16.6331Z"/>
            </svg>
            <span class="user-card__info__actives__count">15</span>
          </div>
          <div class="user-card__info__actives__likeCount">
            <svg class="actives-icon__likeCount" width="20" height="20" viewBox="0 0 21 20"  fill="#657786" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8 19.6379H10.786C8.203 19.5899 0.75 12.8559 0.75 6.47788C0.75 3.41388 3.275 0.723877 6.153 0.723877C8.443 0.723877 9.983 2.30388 10.799 3.45388C11.613 2.30588 13.153 0.723877 15.444 0.723877C18.324 0.723877 20.848 3.41388 20.848 6.47888C20.848 12.8549 13.394 19.5889 10.811 19.6359H10.8V19.6379ZM6.154 2.22488C4.074 2.22488 2.251 4.21288 2.251 6.47988C2.251 12.2199 9.285 18.0759 10.801 18.1379C12.319 18.0759 19.351 12.2209 19.351 6.47988C19.351 4.21288 17.528 2.22488 15.448 2.22488C12.92 2.22488 11.508 5.16088 11.496 5.18988C11.266 5.75188 10.34 5.75188 10.109 5.18988C10.095 5.15988 8.684 2.22488 6.155 2.22488H6.154Z"/>
            </svg>
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
    users: {
      type: Array,
      required: true
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
        border: 4px solid #fff;
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
          &__tweetsCount, &__likeCount {
            display: flex;
            align-items: center;
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