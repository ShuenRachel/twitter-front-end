<template>
  <div>
    <SettingForm
      :init-is-processing="isProcessing"
      :init-submit-status="submitStatus"
      @after-form-submit="afterFormSubmit"
    />
  </div>
</template>

<script>
import SettingForm from "@/components/SettingForm.vue";
import userAPI from "./../apis/users";
import { mapState } from "vuex";

export default {
  components: {
    SettingForm,
  },
  data() {
    return {
      isProcessing: false,
      submitStatus: "waiting",
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    async afterFormSubmit(formData) {
      try {
        this.isProcessing = true;

        const response = await userAPI.updateSetting(this.currentUser.id, formData);
        const { data } = response;

        console.log(data);

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        // TODO: show success msg
        this.submitStatus = "success"

        this.$router.push("/user/home");
      } catch (error) {
        this.isProcessing = false;

        this.submitStatus = error.message;
      }
    },
  },
};
</script>
