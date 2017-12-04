import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import * as types from '../constants/actionTypes'

class PostOperation extends Component {

  render() {
    const { post, deletePost } = this.props
    return (
      <div>
        <button onClick={() =>  deletePost(post.id)}>delete</button>
        <Link to={`posts/${post.id}/edit`}>edit</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch({type: types.DELETE_POST, id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostOperation)
