import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import * as types from '../constants/actionTypes'
import CommentForm from './CommentForm'

class AddComment extends Component {

  onClickAdd = (comment) => {
    const { post, createComment } = this.props
    createComment({
      id: uuid(),
      parentId: post.id,
      author: comment.author,
      body: comment.body,
    })
  }

  render() {
    return (
      <div>
        <h2>Add Comments</h2>
        <CommentForm
          onClickSubmit={(comment) => this.onClickAdd(comment)}
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
    createComment: (comment) => dispatch({type: types.CREATE_COMMENT, comment})

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddComment)
