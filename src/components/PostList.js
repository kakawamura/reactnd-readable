import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Post from './Post'

class PostList extends Component {

  static defaultProps = {
    posts: [],
  }

  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

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
