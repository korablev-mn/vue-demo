import * as api from '../../api'

export default {
  namespaced: true,
  state: {
    data: [],
    loading: false,
    error: false
  },
  mutations: {
    SET_TRENDS: (state, trends) => {
      state.data = trends
    },
    SET_README: (state, payload) => {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    },
    setTrendsLoading (state, trends) {
      state.data.loading = trends
    },
    setTrendsError (state, trends) {
      state.data.error = trends
    }
  },
  getters: {
    getRepoById: (state) => (id) => {
      return state.data.find(item => item.id === id)
    }
  },
  actions: {
    async fetchTrends ({ state, commit, rootState }) {
      commit('setTrendsLoading', true)
      try {
        const { data } = await api.trends.getTrendings()
        // console.log(data)
        commit('SET_TRENDS', data.items)
      } catch (e) {
        console.log(e)
        commit('setTrendsError', 'Error get data')
        throw e
      } finally {
        commit('setTrendsLoading', false)
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const curRepo = getters.getRepoById(id)
      if (curRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('SET_README', { id, content: data })
      } catch (e) {
        console.log(e)
        throw e
      }
    },
    async starRepo ({ commit, getters }, id) {
      console.log('id - ' + id)
    }
  }
}
