import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

  render() {
    const { comments } = this.props
    return (
      <div>
        {comments.map(c => {
          return <Comment
            key={c.id}
            comment={c}
          />
        })}
      </div>
    )
  }
}

export default CommentList
