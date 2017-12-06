import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Icon,
} from 'antd'
import Radium from 'radium'
import nl2br from 'react-nl2br'
import VoteComment from './VoteComment'
import CommentForm from './CommentForm'
import * as types from '../constants/actionTypes'

const styles = {
  wrapper: {
    margin: '16px 0',
    borderBottom: '1px solid #eee',
  },
  author: {
    fontWeight: 600,
    marginBottom: 8,
    fontSize: 14,
  },
  body: {
    lineHeight: '24px',
  },
  icon: {
    cursor: 'pointer',
    margin: '0 8px',
  },
  bottom: {
    margin: '16px 0',
  },
}

class Comment extends Component {

  state = {
    editing: false,
  }

  onClickEdit = () => {
    const { comment } = this.props
    this.setState((state) => {
      return {
        ...state,
        body: comment.body,
        editing: !state.editing,
      }
    })
  }

  onClickDelete = () => {
    const { comment, deleteComment } = this.props
    
    // TODO: Confirm
    deleteComment(comment.id)
    this.setState({
      editing: false,
    })
  }

  onChangeComment = (e) => {
    this.setState({
      body: e.target.value,
    })
  }

  onClickSubmit(newComment) {
    const { comment, updateComment } = this.props
    updateComment(comment.id, newComment.body)
    this.setState({
      editing: false,
    })
  }

  render() {
    const { comment } = this.props
    const { editing } = this.state
    return (
      <div style={styles.wrapper}>
        {editing && 
          <div>
            <CommentForm
              comment={comment}
              onClickSubmit={(comment) => this.onClickSubmit(comment)}
            />
          </div>
        }
        {!editing && <div>
          <p style={styles.author}>{comment.author}</p>
          <p style={styles.body}>{nl2br(comment.body)}</p>
        </div>
        }
        <div style={styles.bottom}>
          <VoteComment
            comment={comment}
          />
          <span>/</span>
          <Icon
            style={styles.icon}
            type="edit"
            shape="circle"
            onClick={() => this.onClickEdit()} />
          <Icon
            style={styles.icon}
            type="delete"
            shape="circle"
            onClick={() => this.onClickDelete()} />
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Comment))
