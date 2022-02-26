<template>
  <div class="card">
    <div class="form-title">
      <div class="form-title-icon">
        <img src="/image/logo.svg" alt="" srcset="" />
      </div>
      <div class="form-title-text">build your account</div>
    </div>
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
import authorizationAPI from "./../apis/authorization";

export default {
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
    };
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.registerData.account) {
          // TODO: show warning in page
          console.log("all field are required");
          return;
        }

        this.isProcessing = true;

        const response = await authorizationAPI.userRegister(this.registerData);
        const { data } = response;

        console.log(data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // TODO: show success msg
        this.consoleAlert(data.message)
        this.$router.push("/user/login");
      } catch (error) {
        this.isProcessing = false;
        this.registerData.password = "";
        this.registerData.checkPassword = "";

        console.log("register error:", error.message);
        this.consoleAlert(error.message)
      }
    },
    consoleAlert(massageReturn) {
      switch (massageReturn) {
        default:
        case "success":
          return console.log("success");
        case "email already existed":
          return console.log("email already existed");
        case "account already existed":
          return console.log("email already existed");
        case "Passwords do not match!":
          return console.log("Passwords do not match!");
      }
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

.btn-orange {
  font-size: 18px;
  font-weight: 700;
}

.link-group {
  align-self: center;
  margin-top: 20px;
  .link {
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
