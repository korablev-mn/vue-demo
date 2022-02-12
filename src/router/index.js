import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'

// export default createRouter({
//   history: createWebHashHistory(),
//   routes
// })

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'
  if (authRoute) {
    next()
    return
  }
  try {
    const response = await api.user.getUserData()
    next(authRoute ? { name: 'feeds' } : null)
    if (response.status === 401) throw new Error()
  } catch (error) {
    if (error.response.status === 401) {
      next(authRoute ? null : { name: 'auth' })
    }
    next({ name: 'auth' })
  }
})

export default router
