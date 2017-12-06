import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import PostForm from './PostForm'
import * as types from '../constants/actionTypes'
import uuid from 'uuid/v4'

class NewPostPage extends Component {

  onClickSubmit = (post) => {
    const { createPost, history } = this.props
    post.id = uuid()
    post.timestamp = Date.now()
    createPost(post)
    history.push('/')    
  }

  render() {
    return (
      <div>
        <h2>Create New Post</h2>
        <PostForm 
          onClickSubmit={(post) => this.onClickSubmit(post)}
        />
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
    createPost: (post) => dispatch({type: types.CREATE_POST, post})
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewPostPage))
