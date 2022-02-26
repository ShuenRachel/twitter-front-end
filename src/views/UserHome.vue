<template>
  <div class="tweets-wrapper">
    <TweetsList
      v-for="tweet in tweetsData"
      :key="tweet.id"
      :init-tweet-data="tweet"
    />
  </div>
</template>

<script>
import TweetsList from "@/components/TweetsList.vue";
// import tweetsAPI from "./../apis/tweets"

const dummyData = [
  {
    TweetId: 30,
    description:
      "Repellendus ex rem iusto beatae ipsum voluptas aut aperiam et. Velit beatae sunt vero.",
    createdAt: "2022-02-26T11:10:23.000Z",
    tweetUserId: 19,
    tweetUserName: "rachellam",
    avatar: null,
    repliedCount: 0,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 25,
    description:
      "Voluptate inventore ipsam facilis consequatur nostrum enim rerum dolor. Fugiat eum omnis ea animi exercitationem odit totam perspiciatis.",
    createdAt: "2022-02-26T11:10:23.000Z",
    tweetUserId: 17,
    tweetUserName: "rachel5",
    avatar: null,
    repliedCount: 1,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 21,
    description: "illum",
    createdAt: "2022-02-26T11:10:23.000Z",
    tweetUserId: 18,
    tweetUserName: "test123",
    avatar: null,
    repliedCount: 0,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 23,
    description: "expedita earum architecto",
    createdAt: "2022-02-26T11:10:23.000Z",
    tweetUserId: 2,
    tweetUserName: "user1",
    avatar: "https://loremflickr.com/320/240/monster/?random=74.11942935327585",
    repliedCount: 0,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 26,
    description:
      "Autem magnam distinctio aut ut ea placeat.\nIllo quisquam recusandae sunt.\nSapiente ipsam ut aut.\nEst illo eum cumque aut architecto consectetur consequatur quis eum.",
    createdAt: "2022-02-26T11:10:23.000Z",
    tweetUserId: 17,
    tweetUserName: "rachel5",
    avatar: null,
    repliedCount: 0,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 27,
    description:
      "Autem et quis vel. Et quia nulla assumenda sed ducimus molestiae. Et iste molestiae fuga voluptatem. Enim commodi labore vel fugiat temporibus ea. Adipisci rem eos illum reprehenderit et magni. Corporis minus rerum et.\n \rTempore laudantium recusandae quos dicta. Mollitia unde repudiandae hic eveniet tempore rerum animi non. Reprehenderit doloremque voluptatum harum deleniti illo laborum cum reprehenderit assumenda.\n \rNemo est quidem quasi labore nostrum facilis velit nisi. Dolorum illo et. Aut occaecati veritatis aut qui quasi quia eveniet. Quia quod exercitationem sapiente nam. Inventore exercitationem a nobis ut. Numquam impedit et ut et voluptas qui ipsa soluta corrupti.",
    createdAt: "2022-02-26T11:10:23.000Z",
    tweetUserId: 4,
    tweetUserName: "user3",
    avatar: "https://loremflickr.com/320/240/monster/?random=48.15326019028885",
    repliedCount: 0,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 24,
    description:
      "Quo voluptate nostrum minus quisquam qui hic alias ex minima. Rem ut saepe molestiae tempora repudiandae. Occaecati sunt dolores. Aliquam nihil blanditiis eaque minus qui ratione qui at consectetur. Vitae quis qui magnam. Autem dolor voluptatem vel in facilis et aut.",
    createdAt: "2022-02-26T11:10:23.000Z",
    tweetUserId: 6,
    tweetUserName: "user5",
    avatar: "https://loremflickr.com/320/240/monster/?random=82.50344786292148",
    repliedCount: 1,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 28,
    description:
      "Neque est consequatur deserunt qui cum qui. Temporibus sapiente iste harum. Quia aut ut magnam necessitatibus dicta. Nulla odio porro voluptatum accusantium et dolor est sapiente. Ipsum qui cupiditate aperiam rerum voluptatem reiciendis.\n \rDoloremque quisquam eos repudiandae accusamus et provident rerum. Libero voluptatem neque sint natus. Aut cum cumque maxime commodi quaerat qui quia voluptatem suscipit. Ducimus enim ipsa et laborum aut eos corrupti.\n \rQuis placeat similique iusto eos eos soluta minima. Eum voluptatem sed aspernatur et temporibus. Eligendi quia deleniti. Cumque earum id voluptatem tempora rerum deleniti incidunt dignissimos consequatur. Nisi et dolorum.",
    createdAt: "2022-02-26T11:10:23.000Z",
    tweetUserId: 9,
    tweetUserName: "user2",
    avatar: "https://loremflickr.com/320/240/monster/?random=69.51553962994556",
    repliedCount: 0,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 22,
    description:
      "Possimus architecto atque voluptas. Saepe quo minus ipsam distinctio natus. Qui unde vero dolorem suscipit et.\n \rCorporis error temporibus sit repudiandae dicta voluptatem. Et eos delectus omnis. Provident itaque dignissimos qui quos dolore qui cupiditate aperiam eveniet. Dolor deserunt occaecati vel. Aliquam nemo sequi soluta qui voluptates quidem veritatis. Officia rerum voluptatem cupiditate in.\n \rAmet ab dolor sapiente. Ipsam eos illum vero explicabo quisquam animi. Et dolorem perspiciatis quia similique voluptates.",
    createdAt: "2022-02-26T11:10:23.000Z",
    tweetUserId: 20,
    tweetUserName: "root",
    avatar: "https://loremflickr.com/320/240/monster/?random=8.253229235850124",
    repliedCount: 1,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 29,
    description: "tempore est velit",
    createdAt: "2022-02-26T11:10:23.000Z",
    tweetUserId: 9,
    tweetUserName: "user2",
    avatar: "https://loremflickr.com/320/240/monster/?random=69.51553962994556",
    repliedCount: 0,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 19,
    description: "illum",
    createdAt: "2022-02-26T03:18:55.000Z",
    tweetUserId: 1,
    tweetUserName: "root",
    avatar:
      "https://loremflickr.com/320/240/monster/?random=38.331340455952436",
    repliedCount: 1,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 16,
    description: "magni",
    createdAt: "2022-02-26T03:18:55.000Z",
    tweetUserId: 8,
    tweetUserName: "user1",
    avatar:
      "https://loremflickr.com/320/240/monster/?random=3.4122445282121827",
    repliedCount: 0,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 12,
    description:
      "Quis eos est ipsa iure. Aut dolores et quis maiores veniam fuga. Vero sed voluptatem qui. Quis ut dolor at.",
    createdAt: "2022-02-26T03:18:55.000Z",
    tweetUserId: 11,
    tweetUserName: "user4",
    avatar: "https://loremflickr.com/320/240/monster/?random=4.050081321070853",
    repliedCount: 1,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 11,
    description:
      "Et eligendi in. Quo assumenda porro dolore at sapiente occaecati est. Perspiciatis consequatur dolorem iste eius beatae accusamus dolorem. Quis deleniti commodi velit sit velit voluptatem. Quasi aut cupiditate exercitationem impedit sed quisquam recusandae qui vel.",
    createdAt: "2022-02-26T03:18:55.000Z",
    tweetUserId: 10,
    tweetUserName: "user3",
    avatar: "https://loremflickr.com/320/240/monster/?random=7.516054052610643",
    repliedCount: 1,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 20,
    description: "est similique consequatur",
    createdAt: "2022-02-26T03:18:55.000Z",
    tweetUserId: 2,
    tweetUserName: "user1",
    avatar: "https://loremflickr.com/320/240/monster/?random=74.11942935327585",
    repliedCount: 0,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 18,
    description:
      "Soluta et nam qui repudiandae consectetur exercitationem quos illo. Rerum praesentium at veniam consectetur quia. Aut veritatis qui.",
    createdAt: "2022-02-26T03:18:55.000Z",
    tweetUserId: 11,
    tweetUserName: "user4",
    avatar: "https://loremflickr.com/320/240/monster/?random=4.050081321070853",
    repliedCount: 1,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 17,
    description:
      "Rerum molestiae nemo iusto sunt unde odio officiis sint. Iste aut ipsam ea voluptatem. Molestiae ea magni. Illum ut a. Debitis quis aut eum sed et. Molestiae in quam velit deleniti.",
    createdAt: "2022-02-26T03:18:55.000Z",
    tweetUserId: 5,
    tweetUserName: "user4",
    avatar:
      "https://loremflickr.com/320/240/monster/?random=0.10651629332425472",
    repliedCount: 1,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 13,
    description:
      "Harum aperiam quia id maiores nihil minima tenetur. Quaerat rerum officia suscipit quibusdam tenetur tenetur sit. Reprehenderit aut quaerat fugit dolores et.",
    createdAt: "2022-02-26T03:18:55.000Z",
    tweetUserId: 9,
    tweetUserName: "user2",
    avatar: "https://loremflickr.com/320/240/monster/?random=69.51553962994556",
    repliedCount: 1,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 14,
    description:
      "Aut similique soluta tenetur maiores modi optio ut sapiente consequuntur. Rerum reiciendis dignissimos ratione molestiae. In similique dolor unde sed dolor. Deserunt et rerum cum quasi optio atque recusandae labore.",
    createdAt: "2022-02-26T03:18:55.000Z",
    tweetUserId: 8,
    tweetUserName: "user1",
    avatar:
      "https://loremflickr.com/320/240/monster/?random=3.4122445282121827",
    repliedCount: 0,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 15,
    description: "velit",
    createdAt: "2022-02-26T03:18:55.000Z",
    tweetUserId: 6,
    tweetUserName: "user5",
    avatar: "https://loremflickr.com/320/240/monster/?random=82.50344786292148",
    repliedCount: 0,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 5,
    description:
      "Saepe atque nesciunt neque quas cum autem.\nEt sunt atque rerum et ea at.\nVoluptatum quis quis ullam nihil ratione ratione et natus.\nTotam impedit est harum itaque.\nUt sed qui cumque fugiat vitae voluptatibus cupiditate quam.",
    createdAt: "2022-02-23T13:14:54.000Z",
    tweetUserId: 1,
    tweetUserName: "root",
    avatar:
      "https://loremflickr.com/320/240/monster/?random=38.331340455952436",
    repliedCount: 5,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 4,
    description:
      "Excepturi consequatur amet quidem tempora quae inventore. Dolorem placeat sunt sapiente iste. Facilis ullam cumque adipisci necessitatibus velit nesciunt tempora error corrupti. Aliquid qui aut esse eos soluta ipsum sapiente sit ut.",
    createdAt: "2022-02-23T13:14:54.000Z",
    tweetUserId: 4,
    tweetUserName: "user3",
    avatar: "https://loremflickr.com/320/240/monster/?random=48.15326019028885",
    repliedCount: 3,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 2,
    description: "facere eum harum",
    createdAt: "2022-02-23T13:14:54.000Z",
    tweetUserId: 5,
    tweetUserName: "user4",
    avatar:
      "https://loremflickr.com/320/240/monster/?random=0.10651629332425472",
    repliedCount: 2,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 3,
    description:
      "Blanditiis sit non est expedita porro facere nemo quos quis. Aliquam in autem qui quidem voluptate eligendi quisquam. Nam unde minima mollitia temporibus aspernatur beatae. Vitae perspiciatis unde dolores asperiores ea quia. Molestiae saepe incidunt distinctio soluta unde totam quaerat. Eum quia sed qui soluta.\n \rArchitecto numquam earum non. Nesciunt dicta quo ad ea dolor saepe atque. Provident fugiat adipisci sit beatae adipisci natus earum veniam ducimus. Molestias ea consequatur et sed sint veniam. Harum in voluptas porro libero saepe non magnam facilis dicta. Quasi nobis et sit asperiores rerum eos aut quisquam.\n \rAliquid iste et. Ea cum id ipsum excepturi labore eaque. Eos laborum consequatur. Quo vitae repellat.",
    createdAt: "2022-02-23T13:14:54.000Z",
    tweetUserId: 1,
    tweetUserName: "root",
    avatar:
      "https://loremflickr.com/320/240/monster/?random=38.331340455952436",
    repliedCount: 3,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 10,
    description:
      "Velit similique nisi adipisci ex non necessitatibus.\nLaudantium accusantium quasi.",
    createdAt: "2022-02-23T13:14:54.000Z",
    tweetUserId: 6,
    tweetUserName: "user5",
    avatar: "https://loremflickr.com/320/240/monster/?random=82.50344786292148",
    repliedCount: 2,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 6,
    description:
      "Ex doloribus qui placeat accusamus. Porro maiores minima eveniet nostrum laudantium laudantium doloribus. Tenetur nemo mollitia nesciunt veniam ut aut molestiae consequuntur. Aut possimus praesentium officiis consequatur quo.\n \rNon beatae molestiae. Perspiciatis repudiandae vel non assumenda est et consequatur. Et sint possimus ab. Occaecati similique autem facilis quidem cupiditate voluptas numquam laborum. Et ipsum enim et excepturi ipsum quisquam.\n \rMinus cumque voluptatem similique officia id aliquid. Autem qui quia consequatur fugit. Eius reiciendis hic tenetur aliquid.",
    createdAt: "2022-02-23T13:14:54.000Z",
    tweetUserId: 2,
    tweetUserName: "user1",
    avatar: "https://loremflickr.com/320/240/monster/?random=74.11942935327585",
    repliedCount: 3,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 1,
    description:
      "Qui labore nisi numquam quasi dolorum.\nIn est facere incidunt.\nPlaceat repudiandae molestias sit.\nCommodi quae qui necessitatibus vitae.\nAut nostrum et.",
    createdAt: "2022-02-23T13:14:54.000Z",
    tweetUserId: 2,
    tweetUserName: "user1",
    avatar: "https://loremflickr.com/320/240/monster/?random=74.11942935327585",
    repliedCount: 1,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 9,
    description: "quod",
    createdAt: "2022-02-23T13:14:54.000Z",
    tweetUserId: 1,
    tweetUserName: "root",
    avatar:
      "https://loremflickr.com/320/240/monster/?random=38.331340455952436",
    repliedCount: 1,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 8,
    description: "assumenda",
    createdAt: "2022-02-23T13:14:54.000Z",
    tweetUserId: 6,
    tweetUserName: "user5",
    avatar: "https://loremflickr.com/320/240/monster/?random=82.50344786292148",
    repliedCount: 0,
    likeCount: 0,
    liked: false,
  },
  {
    TweetId: 7,
    description: "Porro eum molestiae voluptatibus perspiciatis.",
    createdAt: "2022-02-23T13:14:54.000Z",
    tweetUserId: 2,
    tweetUserName: "user1",
    avatar: "https://loremflickr.com/320/240/monster/?random=74.11942935327585",
    repliedCount: 1,
    likeCount: 0,
    liked: false,
  },
];

export default {
  components: {
    TweetsList,
  },
  data() {
    return {
      tweetsData: [],
    };
  },
  methods: {
    fetchTweets() {
      this.tweetsData = dummyData
    }
    // async fetchTweets() {
    //   try {
    //     const response = await tweetsAPI
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  },
  created() {
    this.fetchTweets()
  },
};
</script>

<style lang="scss" scoped>
.tweets-wrapper {
  max-height: 600px;
  max-width: 600px;
  overflow: scroll;
}
</style>