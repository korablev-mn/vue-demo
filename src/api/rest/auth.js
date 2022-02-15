import { makeRequest } from '../request'

export const sendUserToAuthPage = () => {
  return makeRequest({
    url: '/user'
  })
}

export const getAccessTokenByPersonalCode = ({ code }) => {
  return makeRequest({
    url: '/user?{code}'
  })
}
