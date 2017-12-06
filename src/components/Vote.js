import React, { Component } from 'react'
import { connect } from 'react-redux'
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up'
import ThumbsDown from 'react-icons/lib/fa/thumbs-o-down'
import Radium from 'radium'

const styles = {
  thumb: {
    cursor: 'pointer',
    padding: '0 8px',
    fontSize: 20,
  },
}

class Vote extends Component {

  render() {
    const { post, votePost } = this.props
    return (
      <div>
          <ThumbsUp 
            style={styles.thumb} 
            onClick={() => votePost(post.id, "upVote")}/>
        <span>{post.voteScore}</span>
        <ThumbsDown 
          style={styles.thumb} 
          onClick={() => votePost(post.id, "downVote")}/>
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
    votePost: (id, option) => dispatch({type: 'VOTE_POST', id, option}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Vote))
