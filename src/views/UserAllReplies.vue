<template>
  <div class="user-all-replies">
    <h1>UserAllReplies Page.</h1>
    <RepliesList />
      <!-- v-for="reply in repliesData"
      :key="reply.id"
      :init-reply-data="reply" /> 等後端修api -->
  </div>
</template>

<script>
import RepliesList from '../components/RepliesList.vue'
import usersAPI from '../apis/users'

export default {
  components: { 
    RepliesList
  },
  created() {
    this.fetchReplies(Number(this.userId))
  },
  data() {
    return {
      userId: this.$route.params.user_id,
      repliesData: []
    }
  },
  methods: {
    async fetchReplies(userId) {
      try {
        const response = await usersAPI.getUserReplies(userId)
  
        if (response.statusText !== 'OK') {
          throw new Error('status: '+ response.status)
        }

        this.repliesData = response.data.map(reply => {
          return {
            ReplyId: reply.id,
            UserId: reply.UserId,
            description: reply.description,
            createdAt: reply.createdAt,
            updateAt: reply.updateAt,
            //確認還須什麼資料，確認收到的欄位是否一樣
          }
        });
        console.log(this.repliesData)
      } catch (error) {
        console.log(error)
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.userId = to.params.user_id
    this.fetchReplies(Number(this.userId))
    next()
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
</style>

