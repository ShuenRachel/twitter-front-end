<template>
  <div>
    <TweetNew class="tweet-new" />
  </div>
</template>

<script>
import TweetNew from "@/components/TweetNew.vue";

export default {
  components: {
    TweetNew,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.tweet-new {
  border-top: $border-setting;
  border-bottom: 10px solid $border-color;
}
</style>
