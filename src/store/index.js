import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      id: 2,
      account: "user1",
      name: "user1",
      email: "user1@example.com",
      introduction: "Nemo qui repellat ex.\nImpedit rerum nobis modi alias voluptas sunt sed eos.\nMollitia iste modi sunt eos aspernatur vel hic placeat natus.\nAccusamus sunt officiis.\nIpsum aut eum dignissimos delectus vero ut quasi accusamus.",
      avatar: "https://loremflickr.com/320/240/monster/?random=74.11942935327585",
      cover: "https://loremflickr.com/320/240/monster/?random=74.51846285116876",
      isAdmin: false,
      role: "user",
    },
    viewUser: {
      name: "view user",
      tweetCount: 1
    },
    isAdmin: false,
    isAuthenticated: false,
    currentPathName: "",
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser,
      };
      state.isAdmin = currentUser.isAdmin;
      state.isAuthenticated = true;
    },
    updatePathName(state, newPathName) {
      state.currentPathName = newPathName;
    },
  },
  actions: {},
  modules: {},
});
