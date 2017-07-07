import React, {Component,PropTypes} from 'react'
const ViewComponentPage = ({title, content}) =>(
    <article>
        <h1>{title}</h1>
        <p>{content}</p>
    </article>
)
ViewComponentPage.PropTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default ViewComponentPage