import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import * as types from '../constants/actionTypes'
import Header from './Header'
import Radium from 'radium'

const buttonSize = 89

const styles = {
  layout: {
  },
  new: {
    position: 'fixed',
    bottom: 24,
    right: 24,
    width: buttonSize,
    height: buttonSize,
    borderRadius: buttonSize/2,
    border: '1px solid #eee',
    lineHeight: `${buttonSize}px`,
    textAlign: 'center',
    fontSize: 32,
  },
  wrapper: {
    width: 800,
    margin: '0 auto',
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
        <div style={styles.wrapper}>
          {this.props.children}
        </div>
        <Link
          to='/posts/new'
          style={styles.new}
        >+</Link>
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
