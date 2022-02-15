import { feeds } from '../pages/feeds'
import { stories } from '../components/stories'
import { auth } from '../pages/auth'

export default [
  {
    name: 'feeds',
    path: '/',
    component: feeds
  },
  {
    name: 'stories',
    path: '/stories',
    component: stories
  },
  // {
  //   path: '/user',
  //   component: user,
  //   children: [{
  //     path: '',
  //     component: repos,
  //     name: 'user',
  //     props: {
  //       pageTitle: 'Repositories'
  //     }
  //   },
  //   {
  //     path: 'following',
  //     component: following,
  //     name: 'following',
  //     props: {
  //       pageTitle: 'Following'
  //     }
  //   }]
  // },
  {
    path: '/auth',
    name: 'auth',
    component: auth
  }
]
