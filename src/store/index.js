import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      account: "",
      name: "TextUser",
      email: "",
      introduction: "",
      avatar: "",
      cover: "",
      isAdmin: false,
      role: "",
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
