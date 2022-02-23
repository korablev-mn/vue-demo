import { createStore } from 'vuex'
import trends from '../store/modules/trends'
import auth from '../store/modules/auth'
import user from '../store/modules/user'
import issue from '../store/modules/issue'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      return state.trends.data.filter((trendsRepo) => {
        return !state.user.likes.some(starredRepo => {
          return trendsRepo.id === starredRepo.id
        })
      })
    }
  },
  modules: {
    trends,
    auth,
    user,
    issue
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
