import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Radium from 'radium'
import VotePost from './VotePost'
import PostOperation from './PostOperation'
import timestamp from 'unix-timestamp'

const styles = {
  post: {
    textAlign: 'center',
    marginBottom: 32, 
  },
  title: {
    display: 'inline-block',
    fontSize: 32,
    margin: 16,
    transition: 'color 0.1s linear',
    ':hover': {
      color: '#56ad77'
    },
  },
  description: {
    fontSize: 16,
    margin: 4,
  },
  seperator: {
    margin: '0 8px',
  },
  bottom: {
    marginTop: 16,
  }
}

class Post extends Component {

  static propTypes = {
    post: PropTypes.object
  }

  render() {
    const { post } = this.props
    return (
      <div style={styles.post}>
        <span
          key={post.id}
          style={styles.title}>
          <Link 
            to={`/${post.category}/${post.id}`}>
            {post.title}
          </Link>
        </span>
        <div style={styles.description}>
          <span>{post.timestamp}</span>
          <span style={styles.seperator}>/</span>
          <span>{post.author}</span>
          <span style={styles.seperator}>/</span>
          <span>{post.commentCount} comments</span>
        </div>
        <div style={styles.bottom}>
          <VotePost
            post={post}
          />
          <span style={styles.seperator}>/</span>
          <PostOperation post={post} />
        </div>
      </div>
    )
  }

  formatDate = (time) => {
    const date = timestamp.toDate(time)
    return `Published ${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`
  }
}

export default Radium(Post)
