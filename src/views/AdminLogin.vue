<template>
  <div>
    <LoginForm
      @after-form-submit="afterFormSubmit"
    />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm.vue";

export default {
  name: "AdminLogin",
  components: {
    LoginForm,
  },
  methods: {
    afterFormSubmit(data) {
      // TODO: admin API
      console.log(data)
    }
  }
};
</script>
