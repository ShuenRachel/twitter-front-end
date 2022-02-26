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
              <div class="modal-body">
                <div class="user-avatar"><img :src="currentUser.avatar" alt=""></div>
                <div class="input-area">
                  <input type="text" v-model="tweet" maxlength="140" placeholder="有什麼新鮮事？"/>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  @click.stop.prevent="submitTweet"
                >
                  推文
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import tweetAPI from "./../apis/tweets";
import { mapState } from "vuex";
export default {
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
