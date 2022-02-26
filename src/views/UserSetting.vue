<template>
  <div>
    <SettingForm />
  </div>
</template>

<script>
import SettingForm from "@/components/SettingForm.vue";

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
};
</script>
