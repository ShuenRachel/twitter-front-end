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
    <div class="form-footer" v-if="currentPathName === 'user-regist'">
      <button
        class="btn btn-orange btn-full"
        :disabled="isProcessing"
        @click.stop.prevent="handleSubmit"
      >
        註冊
      </button>
      <div class="link-group">
        <router-link to="/user/login" class="link">取消</router-link>
      </div>
    </div>
    <div
      class="form-footer d-flex justify-content-end"
      v-else-if="currentPathName === 'user-setting'"
    >
      <button
        class="btn btn-orange btn-small"
        :disabled="isProcessing"
        @click.stop.prevent="handleSubmit"
      >
        儲存
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { Toastification } from "./../utils/mixin";

export default {
  mixins: [Toastification],
  props: {
    initIsProcessing: {
      type: Boolean,
      required: true,
    },
    initSubmitStatus: {
      type: String,
      required: true,
    },
    initUserData: {
      type: Object,
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
        this.ToastError({
          title: "無法取消追隨用戶，請稍後再試",
        });
        return;
      }
      this.$emit("after-form-submit", this.registerData);
    },
    consoleAlert(newValue) {
      // TODO: update toast value / input warning
      switch (newValue) {
        case "success":
          return this.ToastError({
            title: "無法取消追隨用戶，請稍後再試",
          });
        case "email already existed":
          return console.log("email already existed");
        case "account already existed":
          return console.log("account already existed");
        case "Passwords do not match!":
          return console.log("Passwords do not match!");
        case "All fields are required":
          return this.ToastError({
            title: "請填寫所有欄位",
          });
        default:
          return this.ToastError({
            title: "無法註冊，請稍後再試",
          });
      }
    },
    fetehCurrentUser() {
      this.registerData.account = this.initUserData.account;
      this.registerData.name = this.initUserData.name;
      this.registerData.email = this.initUserData.email;
    },
  },
  created() {
    if (this.initUserData) {
      this.fetehCurrentUser();
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.btn-orange {
  font-size: 18px;
  font-weight: 700;
}

.btn {
  &-full {
    width: 100%;
  }
  &-small {
    width: 116px;
  }
}

.link-group {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  .link {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
