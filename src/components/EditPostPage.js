import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom";
import PostForm from './PostForm'
import * as types from '../constants/actionTypes'
import uuid from 'uuid/v4'

class EditPostPage extends Component {

  componentWillMount() {
    const { match, fetchPost } = this.props
    fetchPost(match.params.postID)
  }

  onClickSubmit = (post) => {
    const { updatePost, history } = this.props
    updatePost(post)
    history.push('/')    
  }

  render() {
   const { post } = this.props
    return (
      <div>
        <h2>Create New Post</h2>
        <PostForm 
          post={post}
          onClickSubmit={(post) => this.onClickSubmit(post)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    post: state.posts.detail,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePost: (post) => dispatch({type: types.UPDATE_POST, post}),
    fetchPost: (id) => dispatch({type: types.FETCH_POST, id}),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditPostPage))
