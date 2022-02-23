<template>
  <div class="card">
    <div class="form-title">
      <div class="form-title-icon"></div>
      <div v-if="currentPath === '/admin/login'" class="form-title-text">後台登入</div>
      <!-- TODO -->
      <div v-else-if="currentPath === '/user/login'" class="form-title-text">登入 Alphitter</div>
    </div>
    <form class="form-wrapper">
      <div class="input-gp">
        <label class="input-label">帳號</label>
        <input type="text" class="input-field" />
        <div class="input-line"></div>
      </div>
      <div class="input-gp">
        <label class="input-label">密碼</label>
        <input type="password" class="input-field" />
        <div class="input-line"></div>
      </div>
    </form>
    <button class="btn btn-orange">登入</button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["currentPath"]),
  },
  // beforeRouteUpdate(to, from, next) {
  //   console.log(to)
  //   next();
  // },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.card {
  width: 80%;
  border: 0;
}

.form-title {
  align-self: center;
}
</style>
