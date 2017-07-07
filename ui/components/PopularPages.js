import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import SharedPages from './SharedPages'

export default class PopularPages extends Component{
    state = {
        pages: []
    }
    componentDidMount(){
        fetch('http://127.0.0.1:5000/api/v1/pages?popular=true')
        .then((response)=>response.json())
        .then((pages)=>this.setState({pages}))
    }
    render(){
        return (
            <SharedPages pages={this.state.pages} />
        )
    }
}