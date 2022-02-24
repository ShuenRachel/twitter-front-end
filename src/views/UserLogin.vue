<template>
  <div>
    <LoginForm @after-form-submit="afterFormSubmit" />
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
  methods: {
    async afterFormSubmit(account, password) {
      try {

        const response = await authorizationAPI.userLogin({ account, password });
        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        localStorage.setItem("token", data.data.token);
console.log('1', data.user)
        this.$store.commit("setCurrentUser", data.data.user);

        this.$router.push("/user/home");
        console.log(response);
      } catch (error) {
        console.log('user login error', error);
      }
    },
  },
};
</script>
