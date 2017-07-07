import React, {Component, PropTypes} from 'react'
import Page from './Page'
export default class SharedPages extends Component{
    static PropTypes = {
        pages : PropTypes.array.isRequired,
        onReloadPages: PropTypes.func.isRequired
    }
    render(){
        const {pages} = this.props
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
                        pages.map((page) => (
                        <Page key={page.id} id={page.id} title={page.title} />
                        ))
                    }
                    </tbody>
            </table>
        )
    }
}