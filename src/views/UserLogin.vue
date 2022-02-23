<template>
  <div>
    <LoginForm @after-form-submit="afterFormSubmit" />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import authorizationAPI from "./../apis/authorization"

export default {
  name: "UserLogin",
  components: {
    LoginForm,
  },
  methods: {
    async afterFormSubmit(data) {
      try {
        const response = await authorizationAPI.signIn(data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  },
};
</script>
