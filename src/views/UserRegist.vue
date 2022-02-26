<template>
  <SettingForm
    :init-is-processing="isProcessing"
    :init-submit-status="submitStatus"
    @after-form-submit="afterFormSubmit"
  />
</template>

<script>
import SettingForm from "@/components/SettingForm.vue";
import authorizationAPI from "./../apis/authorization";

export default {
  components: {
    SettingForm,
  },
  data() {
    return {
      isProcessing: false,
      submitStatus: "waiting"
    };
  },
  methods: {
    async afterFormSubmit(formData) {
      try {

        this.isProcessing = true;

        const response = await authorizationAPI.userRegister(formData);
        const { data } = response;

        console.log(data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // TODO: show success msg
        this.submitStatus = data.message

        this.$router.push("/user/login");
      } catch (error) {
        this.isProcessing = false;

        this.submitStatus = error.message
      }
    },
  },
};
</script>

