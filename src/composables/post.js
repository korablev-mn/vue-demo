import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default (props) => {
//   const isShow = ref(false)
//   const loading = ref(true)
  const isData = ref([])
  const { dispatch, state } = useStore()
  // const data = computed(() => state.issue.data)
//   const toggleClick = async (status) => {
//     isShow.value = status
//     if (isData.value.length === 0) {
//       loading.value = false
//       var prop = props.username.split('/')
//       var owner = prop[0]
//       var repo = prop[1]
//       console.log('запрос issue: repo - ' + prop[0] + '////' + prop[1])
//       try {
//         dispatch('issue/getIssue', { repo, owner })
//         isData.value = computed(() => state.issue.data)
//       } catch (e) {
//         console.log(e)
//       } finally {
//         loading.value = true
//       }
//     }
//   }

  return {
    // isShow,
    // loading,
    isData,
    state
    // toggleClick
  }
}
