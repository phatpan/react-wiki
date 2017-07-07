import React, {Component} from 'react'
import fetch from 'isomorphic-fetch'
import { PAGES_ENDPOINT } from '../../constants/endpoints'
import ViewPage from '../../components/pages/View'

export default class ViewPageContainer extends Component{
    state = {
        page:{
            title: "",
            content: ""
        }
    }

    shouldComponentUpdate(_nextProps, nextState){
        return this.state.page !== nextState.page
    }

    componentDidMount(){
        fetch(`${PAGES_ENDPOINT}/${this.props.params.id}`)
            .then((response)=>response.json())
            .then((page)=>this.setState({page}))
    }

    render(){
        return(
            <ViewPage id={this.state.page.id} title={this.state.page.title} content={this.state.page.content}/>
        )
    }
}