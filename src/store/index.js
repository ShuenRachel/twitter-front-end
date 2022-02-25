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
    isAdmin: true,
    isAuthenticated: false,
    currentPathName: "",
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      console.log('vuex')
      console.log(currentUser);
      state.currentUser = {
        ...state.currentUser,
        ...currentUser,
      };
      state.isAdmin = currentUser.isAdmin
      state.isAuthenticated = true;
    },
    updatePath(state, newPathName) {
      state.currentPathName = newPathName;
    },
  },
  actions: {},
  modules: {},
});
