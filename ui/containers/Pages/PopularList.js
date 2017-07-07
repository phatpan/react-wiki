import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import SharedPages from '../../components/SharedPages'
import { PAGES_POPULAR_ENDPOINT } from '../../constants/endpoints'

export default class PopularPages extends Component{
    state = {
        pages: []
    }
    onReloadPages=()=>{
        fetch(PAGES_POPULAR_ENDPOINT)
        .then((response)=>response.json())
        .then((pages)=>this.setState({pages}))
    }
    componentDidMount(){
        this.onReloadPages()
    }
    render(){
        return (
            <SharedPages pages={this.state.pages} onReloadPages={this.onReloadPages}/>
        )
    }
}