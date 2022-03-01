<template>
  <div class="user-profile-container">
    <!-- 切版時 再把backgroundImage的設定放下去style -->
    <div style="width:598px; height:200px; background-repeat: no-repeat; background-size: cover;" :style="{ backgroundImage: 'url(' + user.cover + ')' }"></div>
    <div style="width:140px; height:140px;" ><img :src="user.avatar" alt=""></div>
    <div>{{ user.name }}</div>
    <div>@{{ user.account }}</div>
    <div>{{ user.introduction }}</div>
    <div><a><span>{{ user.followingCount }} 個</span>跟隨中</a></div>
    <div><a><span>{{ user.followerCount }} 位</span>跟隨者</a></div>
    <button @click.stop.prevent="showEditModal" class="user-edit">編輯個人資料</button>
    <div class="follow-ship">
      <button v-if="user.isFollowing" class="following">正在跟隨</button>
      <button v-else class="follow">跟隨</button>
    </div>
    <div style="border:1px solid red;">test currentUser >>  currentUserId: {{ currentUser.id }}, currentUserName: {{ currentUser.name }}.</div>
    <UserEditModal v-if="modalVisibility"
    :init-user-id="user_id"
    :init-user-cover="user.cover"
    :init-user-avatar="user.avatar"
    :init-user-name="user.name"
    :init-user-introduction="user.introduction"
    @after-close-modal="afterCloseModal" />
  </div>
</template>

<script>
import usersAPI from '../apis/users'
import UserEditModal from '../components/UserEditModal.vue'
import { mapState } from 'vuex'


export default {
  components: {
    UserEditModal
  },
  props: {
    userId: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    this.user_id = this.userId
    this.fetchUserProfile(Number(this.userId))
  },
  data() {
    return{
      user_id: '',
      user: {
        account: '',
        name: '',
        avatar: '',
        cover: '',
        introduction: '',
        followingCount: 0,
        followerCount: 0,
        isFollowing: false
      },
      modalVisibility: false
    }
  },
  methods: {
    async fetchUserProfile(userId) {
      try {
        const response = await usersAPI.getUser(userId)
        const { data } =response

        if (response.statusText !== 'OK') {
          throw new Error('status: '+ response.status)
        }
        this.user = {
          account: data.account,
          name: data.name,
          avatar: data.avatar,
          cover: data.cover,
          introduction: data.introduction,
          followingCount: data.followingCount,
          followerCount: data.followerCount,
          isFollowing: data.isFollowing
        }
        
      } catch (error) {
        console.log(error)
      }
    },
    showEditModal() {
      this.modalVisibility = true
    },
    afterCloseModal() {
      this.modalVisibility = false
    },
  },
  watch: {
    userId(newValue) {
      this.fetchUserProfile(Number(newValue))
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>
