<template>
  <div>
    <transition name="modal">
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <form @submit.stop.prevent="submitEdit">
                <div class="modal-header">
                  <button
                    @click="handleCloseModal"
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                  <button
                    :disabled="isProcessing"
                    type="submit"
                    class="submit-edit"
                  >
                    儲存
                  </button>
                </div>
                <div class="profile-container">
                  <div
                    class="user-cover"
                    style="
                      width: 598px;
                      height: 200px;
                      background-repeat: no-repeat;
                      background-size: cover;
                    "
                    :style="{ backgroundImage: 'url(' + userCover + ')' }"
                  >
                    <input
                      id="cover"
                      class="control-file"
                      name="cover"
                      accept="image/*"
                      type="file"
                      @change="handleCoverChange"
                    />
                  </div>
                  <div class="user-avatar">
                    <img :src="userAvatar" alt="" />
                    <input
                      id="avatar"
                      class="control-file"
                      name="avatar"
                      accept="image/*"
                      type="file"
                      @change="handleAvatarChange"
                    />
                  </div>
                  <div class="profile-content">
                    <div class="user-name">
                      <input
                        v-model="userName"
                        type="text"
                        name="name"
                        class="user-name"
                        placeholder="名稱"
                        maxlength="50"
                      />
                    </div>
                    <div class="user-introduction">
                      <textarea
                        v-model="userIntroduction"
                        name="introduction"
                        id="user-introduction"
                        class="user-introduction"
                        placeholder="自我介紹"
                        maxlength="160"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import userAPI from "../apis/users";
import { Toastification } from "./../utils/mixin";

export default {
  mixins: [Toastification],
  props: {
    initUserId: {
      type: String,
      required: true,
    },
    initUserCover: {
      type: String,
    },
    initUserAvatar: {
      type: String,
    },
    initUserName: {
      type: String,
      required: true,
    },
    initUserIntroduction: {
      type: String,
    },
  },
  created() {
    this.fetchUserProfile();
  },
  data() {
    return {
      userId: 0,
      userCover: "",
      userAvatar: "",
      userName: "",
      userIntroduction: "",
      isProcessing: false,
    };
  },
  computed: {
    ...mapState(["currentUser"]),
  },
  methods: {
    fetchUserProfile() {
      this.userId = Number(this.initUserId);
      this.userCover = this.initUserCover;
      this.userAvatar = this.initUserAvatar;
      this.userName = this.initUserName;
      this.userIntroduction = this.initUserIntroduction;
    },
    handleCloseModal() {
      this.$emit("after-close-modal");
    },
    handleEditSuccess() {
      this.$emit("after-edit-success")
      this.handleCloseModal()
    },
    async submitEdit(e) {
      // TODO: show warning text -> remove html input max-length
      if (this.userName.length > 50) {
        return console.log("name too long");
      } else if (this.userIntroduction.length > 160) {
        return console.log("intro too long");
      }

      const form = e.target;
      const formData = new FormData(form);

      try {
        this.isProcessing = true;

        const response = await userAPI.updateUserProfile({
          user_id: this.userId,
          formData,
        });

        const { data } = response;
        if (data.status !== "success") {
          throw new Error(data.status);
        }
        this.ToastSuccess({
          title: "已更新資料",
        });
        this.handleEditSuccess()
      } catch (error) {
        this.ToastError({
          title: "無法更新資料，請稍後再試",
        });
        this.isProcessing = false;
      }
    },
    handleCoverChange(e) {
      const { files } = e.target;

      if (files.length === 0) {
        this.userCover = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.userCover = imageURL;
      }
    },
    handleAvatarChange(e) {
      const { files } = e.target;

      if (files.length === 0) {
        this.userCover = "";
      } else {
        const imageURL = window.URL.createObjectURL(files[0]);
        this.userAvatar = imageURL;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 3s ease 0s;
}

.modal-content {
  width: 85vw;
  max-width: 600px;
  height: 657px;
  border-radius: 14px;
  div.user-avatar {
    width: 120px;
    height: 120px;
  }
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>
