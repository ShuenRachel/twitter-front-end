import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPath: "/"
  },
  mutations: {
    updatePath(state, newPath) {
      state.currentPath = newPath
    }
  },
  actions: {
  },
  modules: {
  }
})
