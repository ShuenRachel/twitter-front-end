<template>
  <div>
    <LoginForm
      @after-form-submit="afterFormSubmit"
    />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import authorizationAPI from "./../apis/authorization";

export default {
  name: "AdminLogin",
  components: {
    LoginForm,
  },
  methods: {
    async afterFormSubmit(account, password)  {
      try {
        const response = await authorizationAPI.adminLogin({ account, password })
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  }
};
</script>
