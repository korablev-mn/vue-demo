import { createStore } from 'vuex'
import trends from '../store/modules/trends'
import starred from '../store/modules/starred'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      return state.trends.data.filter((trendsRepo) => {
        return !state.starred.data.some(starredRepo => {
          return trendsRepo.id === starredRepo.id
        })
      })
    }
  },
  modules: {
    trends,
    starred
    // starred,
    // auth,
    // user,
    // repos
  }
//  { перенесено в trends.js
//  state: {
//    trends: {
//      data: {},
//      loading: false,
//      error: false
//    }
//  },
//  getters: {
//    getFetchTrandsOwnerFromRepo (state) {
//    }
//  },
//  mutations: {
//    setTrendsData (state, payload) {
//      state.trends.data = payload
//    },
//    setTrendsLoading (state, payload) {
//      state.trends.loading = payload
//    },
//    setTrendsError (state, payload) {
//      state.trends.error = payload
//    }
//  },
//  actions: {
//    async fetchTrends ({ commit }) {
//      commit('setTrendsLoading', true)
//      try {
//        const response = await fetch('https://randomuser.me/api')
//        // const response = await fetch('https://api.github.com/repos/michiganrobotics/rob501')
//        const data = await response.json()
//        commit('setTrendsData', data.results[0])
//        // state.commit()
//        // console.log(data)
//      } catch (e) {
//        console.log(e)
//        commit('setTrendsError', 'Error get data')
//        throw e
//      } finally {
//        commit('setTrendsLoading', false)
//      }
//    }
//  }
})
