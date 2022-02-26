<template>
  <div>
    <div class="form-wrapper">
      <div class="input-gp">
        <label class="input-label">帳號</label>
        <input
          v-model="registerData.account"
          type="text"
          class="input-field"
          required
        />
        <div class="input-line"></div>
      </div>
      <div class="input-gp">
        <label class="input-label">名稱</label>
        <input
          v-model="registerData.name"
          type="text"
          class="input-field"
          required
        />
        <div class="input-line"></div>
      </div>
      <div class="input-gp">
        <label class="input-label">Email</label>
        <input
          v-model="registerData.email"
          type="email"
          class="input-field"
          required
        />
        <div class="input-line"></div>
      </div>
      <div class="input-gp">
        <label class="input-label">密碼</label>
        <input
          v-model="registerData.password"
          type="password"
          class="input-field"
          required
        />
        <div class="input-line"></div>
      </div>
      <div class="input-gp">
        <label class="input-label">密碼確認</label>
        <input
          v-model="registerData.checkPassword"
          type="password"
          class="input-field"
          required
        />
        <div class="input-line"></div>
      </div>
    </div>
    <button
      class="btn btn-orange"
      :disabled="isProcessing"
      @click.stop.prevent="handleSubmit"
    >
      註冊
    </button>
    <div class="link-group">
      <router-link to="/user/login" class="link">取消</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    initIsProcessing: {
      type: Boolean,
      required: true,
    },
    initSubmitStatus: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      registerData: {
        account: "",
        password: "",
        checkPassword: "",
        name: "",
        email: "",
      },
      isProcessing: false,
      submitStatus: "",
    };
  },
  computed: {
    ...mapState(["currentPathName"]),
  },
  watch: {
    initIsProcessing(newValue) {
      this.isProcessing = newValue;
    },
    initSubmitStatus(newValue) {
      this.submitStatus = newValue;
      this.consoleAlert(newValue);
    },
  },
  methods: {
    handleSubmit() {
      if (!this.registerData.account) {
        // TODO: show warning in page
        console.log("all field are required");
        return;
      }
      this.$emit("after-form-submit", this.registerData);
    },
    consoleAlert(newValue) {
      switch (newValue) {
        case "success":
          return console.log("success");
        case "email already existed":
          return console.log("email already existed");
        case "account already existed":
          return console.log("account already existed");
        case "Passwords do not match!":
          return console.log("Passwords do not match!");
        case "All fields are required":
          return console.log("All fields are required");
        default:
          return console.log("error");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.btn-orange {
  width: 100%;
  font-size: 18px;
  font-weight: 700;
}

.link-group {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .link {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
