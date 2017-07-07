import React, { Component, PropTypes } from 'react'
export default class Page extends Component{
    static PropTypes = {
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired
    }
    render(){
        const { id, title } = this.props
        return (
            <tr>
                <td>{id}</td>
                <td>{title}</td>
                <td><a href='javascript:void(0)'>Show</a></td>
            </tr>
        )
    }
}