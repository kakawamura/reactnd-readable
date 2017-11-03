import React, { Component } from 'react'
import Post from './Post'

class PostList extends Component {

  render() {
    const { posts } = this.props
    return (
      <div>
        {posts.map(p => {
          return <Post 
            key={p.id}
            post={p}
          />
        })}
      </div>
    )
  }
}

export default PostList
