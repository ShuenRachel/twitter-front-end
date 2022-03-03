<template>
  <div class="form-panel">
    <div class="form-wrapper">
      <div class="input-gp">
        <label class="input-label">帳號</label>
        <input
          v-model="registerData.account"
          type="text"
          class="input-field"
          required
          @click="
            errorMessage = '';
            submitStatus = '';
          "
        />
        <div
          class="input-line line"
          :class="{
            error:
              errorMessage === 'account' ||
              submitStatus === 'Account already existed!' ||
              submitStatus === 'Account already existed.',
          }"
        ></div>
        <span v-show="errorMessage === 'account'" class="input-warning"
          >不可有空欄位</span
        >
        <span
          v-show="
            submitStatus === 'Account already existed!' ||
            submitStatus === 'Account already existed.'
          "
          class="input-warning"
          >帳號已註冊</span
        >
      </div>
      <div class="input-gp">
        <label class="input-label">名稱</label>
        <input
          v-model="registerData.name"
          type="text"
          class="input-field"
          required
          @click="errorMessage = ''"
        />
        <div
          class="input-line line"
          :class="{
            error:
              errorMessage === 'name' ||
              errorMessage === 'nameTooLong' ||
              registerData.name.length > 50,
          }"
        ></div>
        <span v-show="errorMessage === 'name'" class="input-warning"
          >不可有空欄位</span
        >
        <span v-show="registerData.name.length > 50" class="input-warning"
          >名字上限五十字</span
        >
      </div>
      <div class="input-gp">
        <label class="input-label">Email</label>
        <input
          v-model="registerData.email"
          type="email"
          class="input-field"
          required
          @click="
            errorMessage = '';
            submitStatus = '';
          "
        />
        <div
          class="input-line line"
          :class="{
            error:
              errorMessage === 'email' ||
              submitStatus === 'Email already existed!',
          }"
        ></div>
        <span v-show="errorMessage === 'email'" class="input-warning"
          >不可有空欄位</span
        >
        <span
          v-show="submitStatus === 'Email already existed!'"
          class="input-warning"
          >電郵已註冊</span
        >
      </div>
      <div class="input-gp">
        <label class="input-label">密碼</label>
        <input
          v-model="registerData.password"
          type="password"
          class="input-field"
          required
          @click="errorMessage = ''"
        />
        <div
          class="input-line line"
          :class="{
            error:
              errorMessage === 'password' ||
              errorMessage === 'incorrectPassword',
          }"
        ></div>
        <span v-show="errorMessage === 'password'" class="input-warning"
          >不可有空欄位</span
        ><span
          v-show="errorMessage === 'incorrectPassword'"
          class="input-warning"
          >請確保兩次密碼輸入正確</span
        >
      </div>
      <div class="input-gp">
        <label class="input-label">密碼確認</label>
        <input
          v-model="registerData.checkPassword"
          type="password"
          class="input-field"
          required
          @click="errorMessage = ''"
        />
        <div
          class="input-line line"
          :class="{
            error:
              errorMessage === 'checkPassword' ||
              errorMessage === 'incorrectPassword',
          }"
        ></div>
        <span v-show="errorMessage === 'checkPassword'" class="input-warning"
          >不可有空欄位</span
        ><span
          v-show="errorMessage === 'incorrectPassword'"
          class="input-warning"
          >請確保兩次密碼輸入正確</span
        >
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
      errorMessage: "pending",
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
      console.log("setting form:", newValue);
    },
  },
  methods: {
    handleSubmit() {
      // check if have empty input
      if (!this.registerData.account.trim()) {
        return (this.errorMessage = "account");
      } else if (!this.registerData.name.trim()) {
        return (this.errorMessage = "name");
      } else if (!this.registerData.email.trim()) {
        return (this.errorMessage = "email");
      } else if (!this.registerData.password.trim()) {
        return (this.errorMessage = "password");
      } else if (!this.registerData.checkPassword.trim()) {
        return (this.errorMessage = "checkPassword");
      }

      // check password correct with input check
      if (this.registerData.password !== this.registerData.checkPassword) {
        this.errorMessage = "incorrectPassword";
        this.password = "";
        this.checkPassword = "";
        return;
      }

      this.$emit("after-form-submit", this.registerData);
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

.form {
  &-panel {
    max-width: 642px;
  }
}

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
