import { makeRequest } from '../request'

export const getUserData = () => makeRequest({
  url: '/user'
})

export const getUserRepos = () => makeRequest({
  url: '/user/repos'
})

export const getUserStarred = () => makeRequest({
  url: '/user/starred'
})
