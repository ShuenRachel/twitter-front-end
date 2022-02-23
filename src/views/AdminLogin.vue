<template>
  <div>
    <LoginForm
      @after-form-submit="afterFormSubmit"
    />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";
import adminAPI from "./../apis/authorization"

export default {
  name: "AdminLogin",
  components: {
    LoginForm,
  },
  methods: {
    async afterFormSubmit(data) {
      try {
        const response = await adminAPI.signIn(data)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    },
  }
};
</script>
