import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Vote from './Vote'

class Post extends Component {

  render() {
    const { post } = this.props
    return (
      <div>
        <Link to={`/${post.category}/${post.id}`}>{post.title}</Link>
        <p>{post.author}</p>
        <p>{post.commentCount}</p>
        <Vote
          post={post}
        />
      </div>
    )
  }
}

export default Post
