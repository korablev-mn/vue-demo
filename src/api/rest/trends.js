// import { URLSearchParams } from 'core-js/modules/web.url-search-params'
import { makeRequest } from '../request'

const addStartingZero = (value) => value < 10 ? `0${value}` : value

export const getTrendings = (lang = 'javascript') => {
  // console.log(lang)
  const params = new URLSearchParams()
  const weekMS = 7 * 24 * 60 * 60 * 1000
  const weekAgo = new Date(Date.now() - weekMS)
  const formattedDate = [
    weekAgo.getFullYear(),
    addStartingZero(weekAgo.getMonth() + 1),
    addStartingZero(weekAgo.getDate())
  ].join('-')

  params.append('order', 'desc') // сортировка
  params.append('sort', 'stars')
  params.append('per_page', 10) // кол-во записей
  params.append('q', `language:{lang} created:>${formattedDate}`) // параметры поиска

  return makeRequest({
    url: `/search/repositories?${params}`
  })
}
