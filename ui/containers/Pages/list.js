import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import SharedPages from '../../components/pages/SharedPages'
import { loadPages } from '../../actions/page'

class PagesContainer extends Component {
  static propTypes = {
    pages: PropTypes.array.isRequired,
    onLoadPages: PropTypes.func.isRequired
  }

  onReloadPages=() =>{
    this.props.onLoadPages()
  }

  shouldComponentUpdate(nextProps) {
    return this.props.pages !== nextProps.pages
  }

  componentDidMount(){
    this.onReloadPages()
  }
  render() {
    return (
      <SharedPages pages={this.props.pages} onReloadPages={this.onReloadPages}/>
    )
  }
}

const mapStateToProps = (state) => ({
  pages: state.pages
})

const mapDispatchToProps = (dispatch) => ({
  onLoadPages() {
    dispatch(loadPages())
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PagesContainer)