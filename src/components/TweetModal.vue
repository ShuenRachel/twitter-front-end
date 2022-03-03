<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button
                  @click="handleCloseModal"
                  type="button"
                  class="close-icon modal-header-close"
                >
                  <svg
                      class="close-icon"
                      width="15"
                      height="15"
                      viewBox="0 0 16 16"
                      fill="#FF6600"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z"
                      />
                  </svg>
                </button>
              </div>
              <div v-if="initReplyTweet" class="reply-tweet">
                <div 
                  class="reply-avatar"
                  :style="{ backgroundImage: 'url(' + initReplyTweet.avatar + ')' }">
                </div>
                <div class="connect-line"></div>
                <div class="reply-content">
                  <div class="reply-content-data">
                    <span class="name">{{ initReplyTweet.tweetUserName }}</span>
                    <span class="account">{{ initReplyTweet.tweetUserAccount }}・</span>
                    <span class="created">{{ initReplyTweet.createdAt | fromNow }}</span>
                  </div>
                  <div class="reply-content-text">
                    {{initReplyTweet.description}}
                  </div>
                  <span class="reply-content-footer">回覆給 <span class="reply-footer">@{{initReplyTweet.tweetUserAccount}}</span></span>
                </div>
              </div>
              <TweetReplyNew v-if="initReplyTweet" :reply-id="initReplyTweet.TweetId"  @after-reply-tweet="handleCloseModal" />
              <TweetNew v-else @after-submit-tweet="handleCloseModal" />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import TweetNew from "@/components/TweetNew.vue";
import TweetReplyNew from "@/components/TweetReplyNew.vue";
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
    TweetReplyNew
  },
  data() {
    return {
      tweet: "",
    };
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
  },
  mixins: [fromNowFilter],
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.modal-dialog {
  max-width: 600px;
}
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
  vertical-align: baseline;
}
.modal-content {
  border: none;
  border-radius: 14px;
}
.modal-header {
  align-items: center;
  height: 54px;
  &-close {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    &:hover {
      background-color: rgba(255, 102, 0, 0.1);
    }
  }
}

.reply-tweet {
  position: relative;
  height: 150px;
  padding: 15px 15px 0 75px;
}

.reply-avatar {
  position: absolute;
  top: 18px;
  left: 15px;
  border-radius: 50%;
  background-color: $empty-img;
  background-repeat: no-repeat;
  background-size: cover;
  width: 50px;
  height: 50px;
}
.connect-line {
  position: absolute;
  top: 73px;
  left: 40px;
  width: 2px;
  height: 80px;
  background: #CCD6CC;
}
.reply-content {
  font-size: 15px;
  font-weight: 500;
  span.name {
    font-weight: 700;
    margin-right: 5px;
  }
  span.created {
    color: $text-sub;
  }
  .reply-content-text {
    font-weight: 400;
    margin-bottom: 19px;
  }
  span.reply-content-footer, span.reply-footer {
    color: $text-sub;
    font-size: 13px;
    line-height: 13px;
  }
  span.reply-footer {
    color: $brand-orange;
  }
}


</style>
