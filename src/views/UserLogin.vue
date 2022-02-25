<template>
  <div>
    <LoginForm :init-is-processing="isProcessing" @after-form-submit="afterFormSubmit" />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import authorizationAPI from "./../apis/authorization";

export default {
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
        console.log(response);
      } catch (error) {
        this.isProcessing = false
        console.log('user login error', error);
      }
    },
  },
};
</script>
