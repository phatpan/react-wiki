import fetch from 'isomorphic-fetch'
import { PAGES_ENDPOINT } from '../constants/endpoints'

export const loadPages = () => (
  fetch(PAGES_ENDPOINT)
    .then((response)=>response.json())
    .then((pages)=>receivePages(pages))
)

const receivePages =(pages)=>({
  type:'RECEIVE_PAGES',
  pages
})