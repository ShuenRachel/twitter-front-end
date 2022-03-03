<template>
  <div class="setting-panel">
    <SettingForm
      :init-is-processing="isProcessing"
      :init-submit-status="submitStatus"
      :init-user-data="currentUser"
      @after-form-submit="afterFormSubmit"
    />
  </div>
</template>

<script>
import SettingForm from "@/components/SettingForm.vue";
import userAPI from "./../apis/users";
import { mapState } from "vuex";
import { Toastification } from "./../utils/mixin";

export default {
  mixins: [Toastification],
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

        const response = await userAPI.updateSetting(
          this.currentUser.id,
          formData
        );
        const { data } = response;

        if (data.status !== "success") {
          throw new Error(data.message);
        }
        this.submitStatus = "success";

        this.ToastSuccess({
          title: "成功更新設定！",
        });

        this.$router.push("/user/home");
      } catch (error) {
        this.isProcessing = false;

        if (
          error.message === "Email already existed!" ||
          error.message === "Account already existed!"
        ) {
          return (this.submitStatus = error.message);
        }

        this.ToastError({
          title: "無法更新設定，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.setting {
  &-panel {
    border-top: $border-setting;
    padding-left: 16px;
    padding-top: 30px;
  }
}
</style>
