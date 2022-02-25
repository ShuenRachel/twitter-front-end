<template>
  <div class="popular-panel">
    <div class="popular-wrapper">
      <div class="popular-heading">Popular</div>
      <div class="popular-users">
        <div class="popular-user" v-for="user in users" :key="user.id">{{user.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// import { defineComponent } from '@vue/composition-api'

// const dummyUsers = [
//   {
//     id: 1,
//     name: "root",
//     avatar:
//       "https://loremflickr.com/320/240/monster/?random=38.331340455952436",
//     followerCount: 0,
//     isFollowing: false,
//   },
//   {
//     id: 2,
//     name: "user1",
//     avatar: "https://loremflickr.com/320/240/monster/?random=74.11942935327585",
//     followerCount: 0,
//     isFollowing: false,
//   },
//   {
//     id: 3,
//     name: "user2",
//     avatar: "https://loremflickr.com/320/240/monster/?random=49.78238087182702",
//     followerCount: 0,
//     isFollowing: false,
//   },
//   {
//     id: 4,
//     name: "user3",
//     avatar: "https://loremflickr.com/320/240/monster/?random=48.15326019028885",
//     followerCount: 0,
//     isFollowing: false,
//   },
//   {
//     id: 5,
//     name: "user4",
//     avatar:
//       "https://loremflickr.com/320/240/monster/?random=0.10651629332425472",
//     followerCount: 0,
//     isFollowing: false,
//   },
//   {
//     id: 6,
//     name: "user5",
//     avatar: "https://loremflickr.com/320/240/monster/?random=82.50344786292148",
//     followerCount: 0,
//     isFollowing: false,
//   },
// ];

// console.log(dummyUsers);

export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "root",
          avatar:
            "https://loremflickr.com/320/240/monster/?random=38.331340455952436",
          followerCount: 0,
          isFollowing: false,
        },
        {
          id: 2,
          name: "user1",
          avatar:
            "https://loremflickr.com/320/240/monster/?random=74.11942935327585",
          followerCount: 0,
          isFollowing: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";
.popular-panel {
  border-left: $border-setting;
  .popular-wrapper {
    width: 350px;
    height: 750px;
    border-radius: 14px;
    background: $card-fill;
    margin-top: 15px;
    margin-left: 30px;
  }
}

.popular {
  &-heading {
    padding-top: 10px;
    padding-left: 15px;
    font-size: 18px;
    font-weight: 700;
  }
}
</style>
