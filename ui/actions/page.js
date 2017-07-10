import fetch from 'isomorphic-fetch'
import { PAGES_ENDPOINT } from '../constants/endpoints'

export const loadPages = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOAD_PAGES_REQUEST'
    })

    fetch(PAGES_ENDPOINT)
      .then((response) => response.json())
      .then(
        (pages) => dispatch({
          type: 'LOAD_PAGES_SUCCESS',
          pages
        }),
        (error) => dispatch({
          type: 'LOAD_PAGES_FAILURE'
        })
      )
  }
}