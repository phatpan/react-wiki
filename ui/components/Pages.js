import React, { Component } from 'react'
import fetch from 'isomorphic-fetch'
import Page from './Page'

class Pages extends Component {
  
  state = {
    pages: []
  }

  componentDidMount(){
    fetch('http://localhost:5000/pages/v1/pages')
    .then((response)=> response.json())
    .then((pages) => {
      this.setState({pages})
    })
  }
  render() {
    return (
      <table className='table'>
      <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            this.state.pages.map((page) => (
              <Page key={page.id} id={page.id} title={page.title} />
            ))
          }
        </tbody>
      </table>
    )
  }
}

export default Pages