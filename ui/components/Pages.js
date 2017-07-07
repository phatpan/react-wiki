import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import SharedPages from './SharedPages'

class Pages extends Component {
  state = {
    pages: []
  }

  componentDidMount(){
    fetch('/api/v1/pages')
    .then((response)=> response.json())
    .then((pages) => {
      this.setState({pages})
    })
  }
  render() {
    return (
      <SharedPages pages={this.state.pages} />
    )
  }
}

export default Pages