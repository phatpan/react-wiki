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
            .then((view)=>this.setState({view}))
    }

    render(){
        const {id, title, content} = this.props
        return(
            <ViewPage id={id} title={title} content={content}/>
        )
    }
}