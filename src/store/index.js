import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "./../apis/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      id: 2,
      account: "user1",
      name: "user1",
      email: "user1@example.com",
      introduction:
        "Nemo qui repellat ex.\nImpedit rerum nobis modi alias voluptas sunt sed eos.\nMollitia iste modi sunt eos aspernatur vel hic placeat natus.\nAccusamus sunt officiis.\nIpsum aut eum dignissimos delectus vero ut quasi accusamus.",
      avatar:
        "https://loremflickr.com/320/240/monster/?random=74.11942935327585",
      cover:
        "https://loremflickr.com/320/240/monster/?random=74.51846285116876",
      isAdmin: false,
      role: "user",
    },
    viewUser: {
      name: "view user",
      tweetCount: 1,
    },
    token: "",
    isAdmin: true,
    isAuthenticated: false,
    currentPathName: "",
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        ...currentUser,
      };
      state.token = localStorage.getItem("token");
      state.isAdmin = currentUser.isAdmin;
      state.isAuthenticated = true;
    },
    setViewUser(state, viewUser) {
      state.viewUser.name = viewUser.name
      // TODO: wait for api setting
      // state.viewUser.tweetCount = viewUser.tweetCount;
    },
    updatePathName(state, newPathName) {
      state.currentPathName = newPathName;
    },
    revokeAuthentication(state) {
      state.currentUser = {};
      state.isAuthenticated = false;
      state.token = "";
      localStorage.removeItem("token");
    },
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser();
        const {
          id,
          name,
          account,
          avatar,
          cover,
          email,
          introduction,
          isAdmin,
          role,
        } = data.user;

        commit("setCurrentUser", {
          id,
          name,
          account,
          avatar,
          cover,
          email,
          introduction,
          isAdmin,
          role,
        });
        return true;
      } catch (error) {
        console.log(error);
        commit("revokeAuthentication");
        return false;
      }
    },
    async fetehViewUser({ commit }, userId) {
      try {
        const response = await usersAPI.getUser(userId);
        const { data } = response;

        if (response.statusText !== "OK") {
          throw new Error("status: " + response.status);
        }

        commit("setViewUser", data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
