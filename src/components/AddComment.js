import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as types from '../constants/actionTypes'
import uuid from 'uuid/v4'

class AddComment extends Component {

  state = {
    author: '',
    body: '',
  }

  onChangeAuthor = (e) => {
    this.setState({
      author: e.target.value,
    })
  }

  onChangeBody = (e) => {
    this.setState({
      body: e.target.value,
    })
  }

  onClickAdd = () => {
    const { post, createComment } = this.props
    const { author, body } = this.state
    createComment({
      id: uuid(),
      parentId: post.id,
      author,
      body,
    })
    this.setState({
      author: '',
      body: '',
    })
  }

  render() {
    const { body, author } = this.state
    return (
      <div>
        add comment
        <input
          defaultValue={author}
          onChange={(e) => this.onChangeAuthor(e)}
        />
        <textarea
          defaultValue={body}
          onChange={(e) => this.onChangeBody(e)}
        />
        <button onClick={() => this.onClickAdd()}>add comment</button>
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
