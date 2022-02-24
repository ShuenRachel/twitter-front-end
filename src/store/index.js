import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      account: "",
      name: "",
      email: "",
      introduction: "",
      avatar: "",
      cover: "",
      isAdmin: false,
      role: "",
    },
    isAdmin: true,
    isAuthenticated: false,
    currentPath: "/",
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
    updatePath(state, newPath) {
      state.currentPath = newPath;
    },
  },
  actions: {},
  modules: {},
});
