<template>
  <div class="card">
    <div class="form-title">
      <div class="form-title-icon">
        <img src="../assets/icon/logo.svg" alt="" srcset="" />
      </div>
      <div class="form-title-text">建立你的帳號</div>
    </div>
    <SettingForm
      :init-is-processing="isProcessing"
      :init-submit-status="submitStatus"
      @after-form-submit="afterFormSubmit"
    />
  </div>
</template>

<script>
import SettingForm from "@/components/SettingForm.vue";
import authorizationAPI from "./../apis/authorization";
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

        this.submitStatus = data.message;
        this.ToastSuccess({
          title: "註冊成功",
        });

        this.$router.push("/user/login");
      } catch (error) {
        this.isProcessing = false;

        this.submitStatus = error.message;
        // TODO: check if need to response different msg from err msg
        this.ToastError({
          title: "註冊失敗，請稍後再試",
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.card {
  max-width: 540px;
  border: 0;
  margin: auto;
  margin-top: 65px;
}

.form-title {
  align-self: center;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &-icon {
    width: 50px;
    height: 50px;
  }
  &-text {
    margin-top: 20px;
    font-size: 23px;
    font-weight: 700;
  }
}
</style>
