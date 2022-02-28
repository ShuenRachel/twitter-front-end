<template>
  <div class="user-profile-container">
    <!-- 切版時 再把backgroundImage的設定放下去style -->
    <div style="width:598px; height:200px; background-repeat: no-repeat; background-size: cover;" :style="{ backgroundImage: 'url(' + user.cover + ')' }"></div>
    <div>{{ user.name }}</div>
    <div>@{{ user.account }}</div>
    <div>{{ user.introduction }}</div>
    <div>currentUserId: {{ currentUser.id }}, currentUser: {{ currentUser.name }}.</div>
    <a>跟隨中</a>
    <a>跟隨者</a>
    <button class="user-edit">編輯個人資料</button>
    <div class="follow-ship">
      <button v-if="user.isFollowing" class="following">正在跟隨</button>
      <button v-else class="follow">跟隨</button>
    </div>

  </div>
</template>

<script>
import usersAPI from '../apis/users'
import { mapState } from 'vuex'


export default {
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
    this.fetchUserProfile(Number(this.userId))
  },
  data() {
    return{
      user: {
        account: '',
        name: '',
        avatar: '',
        cover: '',
        introduction: '',
        isFollowing: false
      },
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
          isFollowing: data.isFollowing
        }
        
      } catch (error) {
        console.log(error)
      }
    }
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
