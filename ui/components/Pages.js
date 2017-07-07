import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import SharedPages from './SharedPages'
import { PAGES_ENDPOINT } from '../constants/endpoints'

class Pages extends Component {
  state = {
    pages: []
  }
  onReloadPages=() =>{
    fetch(PAGES_ENDPOINT)
    .then((response)=> response.json())
    .then((pages) => {
      this.setState({pages})
    })
  }

  componentDidMount(){
    this.onReloadPages()
  }
  render() {
    return (
      <SharedPages pages={this.state.pages} onReloadPages={this.onReloadPages}/>
    )
  }
}

export default Pages