<template>
  <div class="admin">
    <section class="users-card">
      <AdminUsers :users="users" />
    </section>
  </div>
</template>

<script>
import AdminUsers from '../components/AdminUsers.vue'

const dummyData = {
  "users": [
        {
            "id": 1,
            "account": "root",
            "name": "root",
            "email": "root@example.com",
            "password": "$2a$10$1YdOq8y.fdRnRQLqxnv3gOjfy06hiAbyWoBnjt8QOvTUSASDpOd6a",
            "introduction": "Sit doloremque iusto laudantium voluptate voluptatem maiores. Non voluptates quasi facilis dignissimos qui numquam quos ea. Illo eius sint voluptatem eveniet similique et labore ea. Magnam cupiditate expedita laboriosam assumenda. Nemo et rerum cupiditate possimus officiis possimus. Nihil harum perspiciatis.\n \rFuga rerum et voluptas qui quas dolores quidem. Doloribus autem dolor totam itaque officia repellat omnis. Eos ut eos.\n \rLibero aliquam et molestiae repellendus in repellat ut expedita. Voluptas distinctio praesentium voluptate ad. Tempora excepturi consequatur occaecati. Hic et cumque soluta rerum architecto qui ex voluptatem similique. Ex repudiandae veritatis dignissimos inventore nisi odit atque voluptas. Necessitatibus voluptas quia est porro deserunt.",
            "avatar": "https://loremflickr.com/320/240/monster/?random=88.35499839157899",
            "cover": "https://loremflickr.com/320/240/monster/?random=78.9232818226702",
            "isAdmin": 1,
            "role": "admin",
            "createdAt": "2022-02-23T13:05:58.000Z",
            "updatedAt": "2022-02-23T13:05:58.000Z"
        },
        {
            "id": 2,
            "account": "user1",
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$SX.fMbhmExhAQVSclnB8fOhjV6yVzRZ.bzeC01ZJu8UYQdqwOfZJq",
            "introduction": "dicta in accusamus",
            "avatar": "https://loremflickr.com/320/240/monster/?random=50.665391723703614",
            "cover": "https://loremflickr.com/320/240/monster/?random=49.54647448924278",
            "isAdmin": 0,
            "role": "user",
            "createdAt": "2022-02-23T13:05:59.000Z",
            "updatedAt": "2022-02-23T13:05:59.000Z"
        },
        {
            "id": 3,
            "account": "user2",
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$SQswKDG4tPiuPQAjDjz3SeKx8K47Vo1W0.HspxB15.MlIxakdHaJi",
            "introduction": "Quia sunt et minima iusto iusto molestias omnis aliquam.",
            "avatar": "https://loremflickr.com/320/240/monster/?random=19.465943503962755",
            "cover": "https://loremflickr.com/320/240/monster/?random=97.69699612159859",
            "isAdmin": 0,
            "role": "user",
            "createdAt": "2022-02-23T13:05:59.000Z",
            "updatedAt": "2022-02-23T13:05:59.000Z"
        },
        {
            "id": 4,
            "account": "user3",
            "name": "user3",
            "email": "user3@example.com",
            "password": "$2a$10$in9ZX2XN0N.zpe7NlWOgpuI8LpLR59zR72aMGqayYYTZNjKvcwnqi",
            "introduction": "Dolor est reiciendis voluptatum et voluptas architecto earum repellendus voluptas.",
            "avatar": "https://loremflickr.com/320/240/monster/?random=44.8724911243164",
            "cover": "https://loremflickr.com/320/240/monster/?random=0.4086996199301307",
            "isAdmin": 0,
            "role": "user",
            "createdAt": "2022-02-23T13:05:59.000Z",
            "updatedAt": "2022-02-23T13:05:59.000Z"
        },
        {
            "id": 5,
            "account": "user4",
            "name": "user4",
            "email": "user4@example.com",
            "password": "$2a$10$DCE1wBjj7CrVfd1o6UaASOOTpCh5F0XsFEAFV4Ap5sKnUKx7uhqnC",
            "introduction": "Suscipit cumque quis laudantium. Delectus et deserunt. Tempore tempore qui laborum cum officiis.",
            "avatar": "https://loremflickr.com/320/240/monster/?random=9.547397089530252",
            "cover": "https://loremflickr.com/320/240/monster/?random=74.28885479361414",
            "isAdmin": 0,
            "role": "user",
            "createdAt": "2022-02-23T13:05:59.000Z",
            "updatedAt": "2022-02-23T13:05:59.000Z"
        },
        {
            "id": 6,
            "account": "user5",
            "name": "user5",
            "email": "user5@example.com",
            "password": "$2a$10$Sl/18U01uMjlS8ztzA6MOecWBXI9NP/8Xvw6JgXTIQV3OtIL91E7O",
            "introduction": "Facere veniam voluptas consequatur consequatur rerum modi et. Dolores atque dolorum quasi quia nesciunt illo. Ut odio voluptas. Consequatur dolorem vitae totam quod ea.",
            "avatar": "https://loremflickr.com/320/240/monster/?random=38.25090787380514",
            "cover": "https://loremflickr.com/320/240/monster/?random=19.976342728950193",
            "isAdmin": 0,
            "role": "user",
            "createdAt": "2022-02-23T13:05:59.000Z",
            "updatedAt": "2022-02-23T13:05:59.000Z"
        }
    ]
 }

export default {
  created() {
    this.fetchUsers()
  },
  components: {
    AdminUsers,
  },
  data() {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers() {
      this.users = dummyData.users
    }
  },
}
</script>

<style lang="scss" scoped>
  @import "../assets/scss/main.scss";

  section.users-card {
    padding: 15px;
  }
</style>