<template>
  <div>
    <LoginForm
      :init-is-processing="isProcessing"
      :need-clear-password="needClearPassword"
      @after-form-submit="afterFormSubmit"
    />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import authorizationAPI from "./../apis/authorization";
import { Toastification } from "./../utils/mixin";

export default {
  mixins: [Toastification],
  name: "UserLogin",
  components: {
    LoginForm,
  },
  data() {
    return {
      isProcessing: false,
      needClearPassword: false,
    };
  },
  methods: {
    async afterFormSubmit(account, password) {
      try {
        this.isProcessing = true;

        const response = await authorizationAPI.userLogin({
          account,
          password,
        });

        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.data.token);

        this.$store.commit("setCurrentUser", data.data.user);

        this.$router.push("/user/home");
      } catch (error) {
        this.isProcessing = false;
        this.needClearPassword = !this.needClearPassword;

        if (error.message === "This is for normal user!") {
          this.ToastError({
            title: "此帳號非使用者",
          });
          return;
        } else if (
          error.message === "Account didn't exist!" ||
          error.message === "Password incorrect!"
        ) {
          this.ToastError({
            title: "登入失敗，帳號或密碼有誤",
          });
          return;
        }

        this.ToastError({
          title: "無法登入，請稍後再試",
        });
      }
    },
  },
};
</script>
