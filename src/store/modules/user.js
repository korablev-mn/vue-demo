import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    userData: {},
    likes: {}
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.userData = payload
    },
    SET_LIKES: (state, loadData) => {
      state.likes = loadData
    }
  },
  getters: {
  },
  actions: {
    async getUser ({ commit }) {
      console.log('запрос user')
      try {
        const { data } = await api.user.getUserData()
        commit('SET_USER', data)
      } catch (e) {
        console.log(e)
      }
    },
    async getLikeUserRepo ({ commit }) {
      console.log('запрос лайков userа')
      try {
        const { data } = await api.user.getUserStarred()
        commit('SET_LIKES', data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
