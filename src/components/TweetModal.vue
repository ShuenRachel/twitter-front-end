<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span
                    aria-hidden="true"
                    @click.stop.prevent="handleCloseModal"
                    >&times;</span
                  >
                </button>
              </div>
              <div v-if="initReplyTweet" class="reply-tweet">
                <div class="reply-avatar">
                  <img :src="initReplyTweet.avatar" alt="" />
                </div>
                <div class="reply-content">
                  <div class="reply-content-data">
                    <span>{{ initReplyTweet.tweetUserName }}</span>
                    <span class="account">{{ initReplyTweet.tweetUserAccount }}</span>
                    <span>{{ initReplyTweet.createdAt | fromNow }}</span>
                  </div>
                  <div class="reply-content-text">
                    {{initReplyTweet.description}}
                  </div>
                  <span class="reply-content-footer">回覆給 <span>@{{initReplyTweet.tweetUserAccount}}</span></span>
                </div>
              </div>
              <TweetNew :reply-id="initReplyTweet.TweetId" @after-submit-tweet="handleCloseModal" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import TweetNew from "@/components/TweetNew.vue";
import tweetAPI from "./../apis/tweets";
import { mapState } from "vuex";
import { fromNowFilter } from "../utils/mixin";
export default {
  props: {
    initReplyTweet: {
      type: Object,
    },
  },
  components: {
    TweetNew,
  },
  data() {
    return {
      tweet: "",
    };
  },
  watch: {
    initReplyTweet(newValue) {
      console.log("modal:", newValue);
    },
  },
  computed: {
    ...mapState(["currentUser"]),
    title() {
      return this.handlePathName();
    },
  },
  methods: {
    handleCloseModal() {
      this.$emit("after-close-modal");
    },
    async submitTweet() {
      try {
        // TODO: warning text > 140 words
        // TODO: handle api response
        if (this.tweet.length > 140) return;
        const response = tweetAPI.createTweet(this.tweet);

        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  },
  mixins: [fromNowFilter],
};
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
