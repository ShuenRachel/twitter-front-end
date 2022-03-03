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
                  <div class="modal-header-title">
                    <span class="header-title">編輯個人資料</span>
                  </div>
                  <div class="modal-header-submit">
                    <button
                      :class="{ 'd-none': isProcessing }"
                      type="submit"
                      class="submit-edit btn-orange"
                    >
                      儲存
                    </button>
                    <button
                      :class="{ 'd-none': !isProcessing }"
                      @click.stop.prevent=""
                      class="submit-wait btn-orange"
                    >
                      儲存中...
                    </button>
                  </div>
                </div>
                <div class="profile-container">
                  <div
                    class="user-cover"
                    :style="{ backgroundImage: 'url(' + userCover + ')' }"
                  >
                    <div class="user-cover-icon-container">
                      <label for="cover">
                        <div class="user-cover-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.708 20H2.292C1.028 20 0 18.972 0 17.708V5.375C0 4.11 1.028 3.083 2.292 3.083H4.438C5.633 1.17 7.722 0 10 0C12.277 0 14.367 1.17 15.562 3.083H17.708C18.972 3.083 20 4.11 20 5.375V17.708C20 18.972 18.972 20 17.708 20ZM2.292 4.583C1.855 4.583 1.5 4.938 1.5 5.375V17.708C1.5 18.145 1.855 18.5 2.292 18.5H17.708C18.145 18.5 18.5 18.145 18.5 17.708V5.375C18.5 4.938 18.145 4.583 17.708 4.583H15.258C14.941 4.633 14.626 4.488 14.476 4.201C13.596 2.536 11.882 1.501 10 1.501C8.117 1.501 6.402 2.536 5.524 4.203C5.364 4.505 5.022 4.663 4.691 4.583H2.293H2.292Z"
                            />
                            <path
                              d="M9.99989 6.16699C7.31989 6.16699 5.13989 8.34699 5.13989 11.027C5.13989 13.707 7.31989 15.887 9.99989 15.887C12.6799 15.887 14.8599 13.707 14.8599 11.027C14.8599 8.34699 12.6799 6.16699 9.99989 6.16699ZM11.9999 11.75H10.7499V13C10.7499 13.414 10.4139 13.75 9.99989 13.75C9.58589 13.75 9.24989 13.414 9.24989 13V11.75H7.99989C7.58589 11.75 7.24989 11.414 7.24989 11C7.24989 10.586 7.58589 10.25 7.99989 10.25H9.24989V8.99999C9.24989 8.58599 9.58589 8.24999 9.99989 8.24999C10.4139 8.24999 10.7499 8.58599 10.7499 8.99999V10.25H11.9999C12.4139 10.25 12.7499 10.586 12.7499 11C12.7499 11.414 12.4139 11.75 11.9999 11.75Z"
                            />
                          </svg>
                        </div>
                        <input
                          id="cover"
                          class="control-file d-none"
                          name="cover"
                          accept="image/*"
                          type="file"
                          @change="handleCoverChange"
                        />
                      </label>
                      <div class="user-cover-icon user-cover-icon-close">
                        <svg
                          class="close-icon"
                          width="15"
                          height="15"
                          viewBox="0 0 16 16"
                          fill="white"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.41412 7.99988L15.2071 2.20687C15.5971 1.81687 15.5971 1.18388 15.2071 0.792875C14.8171 0.401875 14.1841 0.402875 13.7931 0.792875L8.00012 6.58588L2.20712 0.792875C1.81712 0.402875 1.18412 0.402875 0.793119 0.792875C0.402119 1.18288 0.403119 1.81587 0.793119 2.20687L6.58612 7.99988L0.793119 13.7929C0.403119 14.1829 0.403119 14.8159 0.793119 15.2069C0.988119 15.4019 1.24312 15.4999 1.50012 15.4999C1.75712 15.4999 2.01212 15.4019 2.20712 15.2069L8.00012 9.41387L13.7931 15.2069C13.9881 15.4019 14.2431 15.4999 14.5001 15.4999C14.7571 15.4999 15.0121 15.4019 15.2071 15.2069C15.5971 14.8169 15.5971 14.1839 15.2071 13.7929L9.41412 7.99988Z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div class="user-avatar">
                    <div class="user-avatar-icon-container">
                      <div 
                        class="image-container"
                        >
                        <div
                          class="image-container-bg"
                          :style="{ backgroundImage: 'url(' + userAvatar + ')' }"
                        ></div>
                      </div>
                      <label for="avatar">
                        <div class="user-cover-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="white"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M17.708 20H2.292C1.028 20 0 18.972 0 17.708V5.375C0 4.11 1.028 3.083 2.292 3.083H4.438C5.633 1.17 7.722 0 10 0C12.277 0 14.367 1.17 15.562 3.083H17.708C18.972 3.083 20 4.11 20 5.375V17.708C20 18.972 18.972 20 17.708 20ZM2.292 4.583C1.855 4.583 1.5 4.938 1.5 5.375V17.708C1.5 18.145 1.855 18.5 2.292 18.5H17.708C18.145 18.5 18.5 18.145 18.5 17.708V5.375C18.5 4.938 18.145 4.583 17.708 4.583H15.258C14.941 4.633 14.626 4.488 14.476 4.201C13.596 2.536 11.882 1.501 10 1.501C8.117 1.501 6.402 2.536 5.524 4.203C5.364 4.505 5.022 4.663 4.691 4.583H2.293H2.292Z"
                            />
                            <path
                              d="M9.99989 6.16699C7.31989 6.16699 5.13989 8.34699 5.13989 11.027C5.13989 13.707 7.31989 15.887 9.99989 15.887C12.6799 15.887 14.8599 13.707 14.8599 11.027C14.8599 8.34699 12.6799 6.16699 9.99989 6.16699ZM11.9999 11.75H10.7499V13C10.7499 13.414 10.4139 13.75 9.99989 13.75C9.58589 13.75 9.24989 13.414 9.24989 13V11.75H7.99989C7.58589 11.75 7.24989 11.414 7.24989 11C7.24989 10.586 7.58589 10.25 7.99989 10.25H9.24989V8.99999C9.24989 8.58599 9.58589 8.24999 9.99989 8.24999C10.4139 8.24999 10.7499 8.58599 10.7499 8.99999V10.25H11.9999C12.4139 10.25 12.7499 10.586 12.7499 11C12.7499 11.414 12.4139 11.75 11.9999 11.75Z"
                            />
                          </svg>
                        </div>
                        <input
                          id="avatar"
                          class="control-file d-none"
                          name="avatar"
                          accept="image/*"
                          type="file"
                          @change="handleAvatarChange"
                        />
                      </label>
                    </div>
                  </div>
                  <div class="profile-content">
                    <div class="user-name ps-label-title">
                      <label for="name" class="user-name-label">
                        名稱
                      </label>
                      <input
                        v-model="userName"
                        id="name"
                        type="text"
                        name="name"
                        class="user-name input-gp input-field"
                      />
                      <div class="user-name-input-border input-border"
                      :class="{ error: userName.length === 0 || userName.length > 50}"></div>
                      <div 
                        v-if="userName.length === 0" class="user-name-input-error-info" style="color:#fc5a5a;">不可有空欄位
                      </div>
                      <div 
                        v-if="userName.length > 50" class="user-name-input-error-info" style="color:#fc5a5a;">名稱上限 50 字
                      </div>
                    </div>
                    <div class="user-name-length input-length"
                    :class="{ error: userName.length === 0 || userName.length > 50 }"> {{ userName.length }}/50 </div>
                    <div class="user-introduction ps-label-title">
                      <label for="user-introduction" class="user-name-label">
                        自我介紹
                      </label>
                      <textarea
                        v-model="userIntroduction"
                        name="introduction"
                        id="user-introduction"
                        class="user-introduction input-gp input-field"
                        cols="40"
                        rows="8"
                      ></textarea>
                      <div class="user-introduction-input-border input-border"
                      :class="{ error: userIntroduction.length > 160}"></div>
                      <div 
                        v-if="userIntroduction.length > 160" class="user-introduction-input-error-info" style="color:#fc5a5a;">自我介紹上限 160 字
                      </div>
                    </div>
                    <div class="user-introduction-length input-length"
                    :class="{ error: userIntroduction.length > 160 }"> {{ userIntroduction.length }}/160 </div>
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
      this.$emit("after-edit-success");
      this.handleCloseModal();
    },
    async submitEdit(e) {
      // TODO: show warning text -> remove html input max-length
      if (this.userName.length > 50 || this.userName.length === 0) {
        return console.log("name too long or empty.");
      } else if (this.userIntroduction.length > 160) {
        return console.log("intro too long.");
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
        this.handleEditSuccess();
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

.modal {
  &-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: table;
    transition: opacity 3s ease 0s;
  }
  &-wrapper {
    display: table-cell;
    vertical-align: middle;
  }
  &-content {
    width: 85vw;
    max-width: 600px;
    height: 657px;
    border-radius: 14px;
  }
  &-header {
    align-items: center;
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
    &-title {
      flex: 1 1 0;
      font-size: 19px;
      font-weight: 700;
      text-align: left;
      padding-left: 40px;
    }
    &-submit {
      button {
        font-weight: 500;
        font-size: 18px;
        width: 66px;
        height: 28px;
        border-radius: 100px;
        &.submit-wait {
          width: 90px;
          height: 28px;
          background-color: #f3e3d8;
          cursor: wait;
        }
      }
    }
  }
}

.profile-container {
  div.user-cover {
    position: relative;
    width: 598px;
    height: 200px;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.6;
    &-icon-container {
      display: flex;
      align-items: center;
      position: absolute;
      top: calc(50% - 12px);
      left: calc(50% - 35.75px);
      label {
        margin-bottom: 0;
      }
      .user-cover-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        &-close {
          margin-left: 36.5px;
        }
        &:hover {
          cursor: pointer;
          background-color: $input-blue;
        }
      }
    }
  }
  div.user-avatar {
    position: relative;
    &-icon-container {
      .image-container {
        position: absolute;
        top: -60px;
        left: 15px;
        width: 120px;
        height: 120px;
        border-radius: 50%;
        background-color: $empty-img;
        border: 4px solid #FFFFFF;
        &-bg { 
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0.75;
        }
      }
      .user-cover-icon {
        position: absolute;
        top: -15px;
        left: 60px;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          cursor: pointer;
          border-radius: 50%;
          background-color: $input-blue;
        }
      }
    }
  }
  div.profile-content {
    padding: 56px 15px 0;
    .user-name {
      input {
        height: 54px;
        color: $text-main;
        font-size: 19px;
        padding: 24px 15px 6px;
        margin-bottom: 0;
        &:hover, &:focus {
          &+div.input-border {
            z-index: 2;
            border-radius: 0px 0px 4px 4px;
            border-bottom: 2px solid $input-blue;
          }
        }
      }
      &-input-border {
        position: absolute;
        top: 52px;
      }
      &-input-error-info {
        position: absolute;
        top: 54px;
        left: 0;
        font-size: 15px;
      }
    }
    .user-introduction {
      textarea {
        height: 150px;
        overflow: scroll;
        resize: none;
        margin-bottom: 0;
        &:hover, &:focus {
          &+div.input-border {
            z-index: 2;
            border-radius: 0px 0px 4px 4px;
            border-bottom: 2px solid $input-blue;
          }
        }
      }
      &-input-border {
        position: absolute;
        top: 148px;
      }
      &-input-error-info {
        position: absolute;
        top: 150px;
        left: 0;
        font-size: 15px;
      }
    }
    .ps-label-title {
      position: relative;
      label {
        z-index: 1;
        position: absolute;
        top: 5px;
        left: 15px;
        color: $text-sub;
        font-size: 15px;
        line-height: 15px;
      }
    }
    .input-length {
      text-align: right;
      margin-bottom: 20px;
      font-size: 15px;
      line-height: 21.72px;
      color: $text-sub;
      &.error {
        color: $warning-red;
      }
    }
    .input-border {
      left: 0;
      width: 100%;
      border-bottom: 2px solid $text-sub;
      border-radius: 0px 0px 4px 4px;
      &.error {
        border-bottom: 2px solid $warning-red;
      }
    }
  }
}
</style>
