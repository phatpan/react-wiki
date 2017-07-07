import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
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
                <td><Link to={{pathname:`/pages/${id}`}} >View</Link></td>
            </tr>
        )
    }
}