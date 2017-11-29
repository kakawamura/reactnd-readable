import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import * as types from '../constants/actionTypes'
import Header from './Header'
import Radium from 'radium'

const styles = {
  layout: {
  }
}

class Layout extends Component {

  componentDidMount() {
    const { fetchCategories } = this.props
    fetchCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <div style={styles.layout}>
        <Header categories={categories.list}/>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => dispatch({type: types.FETCH_CATEGORIES}),
  }
}
 
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Radium(Layout)))
