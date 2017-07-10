import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'

const thunk = (store) => (next) => (action) =>
  typeof action === 'function' ? action(store.dispatch, store.getState): next(action)
  
export default () => {
  const middlewares = [thunk]
  const store = createStore(rootReducer, applyMiddleware(...middlewares))
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      System.import('../reducers').then(nextRootReducer =>
        store.replaceReducer(nextRootReducer.default)
      )
    })
  }

  return store
}