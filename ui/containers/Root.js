import React, { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from '../stores/configureStore'
import routes from '../routes'

export default class App extends Component {
  render() {
    return (
      <Provider store={configureStore()} key='provider'>
        {routes()}
      </Provider>
    )
  }
}