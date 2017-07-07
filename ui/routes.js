import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App/App'
import Home from './components/Home'
import Pages from './containers/Pages/List'
import ViewPage from './containers/Pages/View'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <route path='pages'>
          <IndexRoute component={Pages}/>
          <route path=':id' component={ViewPage}/>
        </route>
      </Route>
    </Router>
  )
}