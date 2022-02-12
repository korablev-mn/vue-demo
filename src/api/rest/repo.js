import { makeRequest } from '../request'

export const getIssues = ({ repo, owner }) => makeRequest({
  url: `/repos/${owner}/${repo}/issues`,
  method: 'get'
})
