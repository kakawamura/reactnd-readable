import React, { Component } from 'react'
import { connect } from 'react-redux'
import VoteComment from './VoteComment'
import * as types from '../constants/actionTypes'

class Comment extends Component {

  state = {
    editing: false,
    body: '',
  }

  onClickEdit() {
    const { comment } = this.props
    this.setState({
      body: comment.body,
      editing: true,
    })
  }

  onClickDelete() {
    const { comment, deleteComment } = this.props
    
    // TODO: Confirm
    deleteComment(comment.id)
    this.setState({
      editing: false,
    })
  }

  onChangeComment(e) {
    this.setState({
      body: e.target.value,
    })
  }

  onClickSubmit() {
    const { comment, updateComment } = this.props
    const { body }= this.state
    updateComment(comment.id, body)
    this.setState({
      editing: false,
    })
  }

  onClickCancel() {
    this.setState({
      editing: false,
    })
  }

  render() {
    const { comment } = this.props
    const { editing, body } = this.state
    return (
      <div>
        <VoteComment
          comment={comment}
        />
        <button onClick={() => this.onClickEdit()}>Edit</button>
        <button onClick={() => this.onClickDelete()}>Delete</button>
        {editing && 
          <div>
            <input defaultValue={body} onChange={(e) => this.onChangeComment(e)}></input>
            <button onClick={() => this.onClickSubmit()}>Submit</button>
            <button onClick={() => this.onClickCancel()}>Cancel</button>
          </div>
        }
        {!editing && <p>{comment.body}</p>}
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
    updateComment: (id, body) => dispatch({type: types.UPDATE_COMMENT, id, body}),
    deleteComment: (id) => dispatch({type: types.DELETE_COMMENT, id}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
