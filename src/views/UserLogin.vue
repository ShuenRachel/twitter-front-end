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
    async afterFormSubmit(account, password) {
      try {
        // console.log(data)
        const response = await authorizationAPI.signIn({account, password})
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  },
};
</script>
