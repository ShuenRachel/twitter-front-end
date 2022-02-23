import Vue from 'vue'
import VueRouter from 'vue-router'
import UserLogin from '../views/UserLogin.vue'
import NotFound from '../views/NotFound.vue'
import store from "./../store";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "root",
    redirect: "/user/login",
  },
  {
    path: '/user',
    redirect: '/user/home' 
  },
  {
    path: "/user/login",
    name: "user-login",
    component: UserLogin
  },
  {
    path: '/user/regist',
    name: 'user-regist',
    component: () => import('../views/UserRegist.vue')
  },
  {
    path: '/user/home',
    name: 'user-home',
    component: () => import('../views/UserHome.vue')
  },
  {
    path: '/user/setting',
    name: 'user-setting',
    component: () => import('../views/UserSetting.vue')
  },
  {
    path: '/user/tweets/:tweet_id',
    name: 'user-tweet',
    component: () => import('../views/UserTweet.vue')
  },
  {
    path: '/user/:user_id/tweets',
    name: 'user-all-tweets',
    component: () => import('../views/UserAllTweets.vue')
  },
  {
    path: '/user/:user_id/replies',
    name: 'user-all-replies',
    component: () => import('../views/UserAllReplies.vue')
  },
  {
    path: '/user/:user_id/like',
    name: 'user-all-like',
    component: () => import('../views/UserAllLike.vue')
  },
  {
    path: '/user/:user_id/followers',
    name: 'user-followers',
    component: () => import('../views/UserFollowers.vue')
  },
  {
    path: '/user/:user_id/followings',
    name: 'user-followings',
    component: () => import('../views/UserFollowings.vue')
  },
  {
    path: '/user/:user_id',
    redirect: '/user/:user_id/tweets'
  },
  {
    path: '/admin/login',
    name: 'admin-login',
    component: () => import('../views/AdminLogin.vue')
  },
  {
    path: '/admin/tweets',
    name: 'admin-tweets',
    component: () => import('../views/AdminAllTweets.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    component: () => import('../views/AdminAllUsers.vue')
  },
  {
    path: '/admin',
    redirect: '/admin/tweets'
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  store.commit("updatePath", to.path);
  // console.log(to.path)
  // console.log(from);
  next();
});

export default router
