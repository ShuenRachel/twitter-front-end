<template>
  <div class="card">
    <div class="form-title">
      <div class="form-title-icon">
        <img src="/image/logo.svg" alt="" srcset="" />
      </div>
      <div v-if="currentPathName === 'admin-login'" class="form-title-text">
        後台登入
      </div>
      <div v-else-if="currentPathName === 'user-login'" class="form-title-text">
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
    <button class="btn btn-orange" :disabled="isProcessing" @click.stop.prevent="handleSubmit">
      登入
    </button>
    <div v-if="currentPathName === 'admin-login'" class="link-group">
      <router-link to="/user/login" class="link">前台登入</router-link>
    </div>
    <div v-else-if="currentPathName === 'user-login'" class="link-group">
      <router-link to="/user/regist" class="link">註冊 Alphitter</router-link>
      <span class="link-dot">・</span>
      <router-link to="/admin/login" class="link">後台登入</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    initIsProcessing: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      account: "",
      password: "",
      isProcessing: false
    };
  },
  computed: {
    ...mapState(["currentPathName"]),
  },
  watch: {
    initIsProcessing(newValue) {
      this.isProcessing = newValue
    }
  },
  methods: {
    handleSubmit() {
      if (!this.account || !this.password) {
        // TODO: show warning in page
        console.log("all field are required");
        return;
      }
      this.$emit("after-form-submit", this.account, this.password);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.card {
  max-width: 540px;
  border: 0;
  margin: auto;
  margin-top: 65px;
}

.form-title {
  align-self: center;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-icon {
    width: 50px;
    height: 50px;
  }
  &-text {
    margin-top: 20px;
    font-size: 23px;
    font-weight: 700;
  }
}

.link-group {
  align-self: flex-end;
  margin-top: 20px;
}
.link-dot {
  color: $link-blue;
}
</style>
