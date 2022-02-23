<template>
  <div class="card">
    <div class="form-title">
      <div class="form-title-icon"></div>
      <div v-if="currentPath === '/admin/login'" class="form-title-text">
        後台登入
      </div>
      <div v-else-if="currentPath === '/user/login'" class="form-title-text">
        登入 Alphitter
      </div>
    </div>
    <div class="form-wrapper">
      <div class="input-gp">
        <label class="input-label">帳號</label>
        <input v-model="account" type="text" class="input-field" required />
        <div class="input-line"></div>
      </div>
      <div class="input-gp">
        <label class="input-label">密碼</label>
        <input
          v-model="password"
          type="password"
          class="input-field"
          required
        />
        <div class="input-line"></div>
      </div>
    </div>
    <button class="btn btn-orange" @click.stop.prevent="handleSubmit">
      登入
    </button>
    <div v-if="currentPath === '/admin/login'" class="link-group">
      <router-link to="/user/login">前台登入</router-link>
    </div>
    <div v-else-if="currentPath === '/user/login'" class="link-group">
      <router-link to="/user/regist">註冊 Alphitter</router-link>
      <span>・</span>
      <router-link to="/admin/login">後台登入</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  computed: {
    ...mapState(["currentPath"]),
  },
  methods: {
    handleSubmit() {
      const data = {
        account: this.account,
        password: this.password,
      };
      this.$emit("after-form-submit", data);
    },
  },
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
