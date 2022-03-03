<template>
  <div>
    <LoginForm :init-is-processing="isProcessing" @after-form-submit="afterFormSubmit" />
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
      isProcessing: false
    }
  },
  methods: {
    async afterFormSubmit(account, password) {
      try {
        this.isProcessing = true

        const response = await authorizationAPI.userLogin({ account, password });
        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.data.token);

        this.$store.commit("setCurrentUser", data.data.user);

        this.$router.push("/user/home");
      } catch (error) {
        // TODO: check if need to check err msg
        this.isProcessing = false
        this.ToastError({
          title: "無法登入，請稍後再試",
        });
      }
    },
  },
};
</script>
