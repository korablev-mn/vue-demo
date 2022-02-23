import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: {}
  },
  mutations: {
    SET_ISSUE: (state, payload) => {
      state.data = payload
    }
  },
  getters: {
  },
  actions: {
    async getIssue ({ commit }, { repo, owner }) {
      console.log('Запрос: github/repo/' + owner + '/' + repo + '/issues')
      try {
        const { data } = await api.repo.getIssues({ repo, owner })
        commit('SET_ISSUE', data)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
