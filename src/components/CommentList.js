import React, { Component } from 'react'
import Comment from './Comment'
import Radium from 'radium'

const styles = {
  wrapper: {
    margin: '16px 0',
  }
}

class CommentList extends Component {

  render() {
    const { comments } = this.props
    return (
      <div style={styles.wrapper}>
        <h2>Comments</h2>
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

export default Radium(CommentList)
