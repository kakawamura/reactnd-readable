import React, { Component } from 'react'
import { connect } from 'react-redux'
import Radium from 'radium'
import Vote from './Vote'

class VotePost extends Component {

  render() {
    const { post, votePost } = this.props
    return (
      <Vote
        score={post.voteScore}
        voteUp={() => votePost(post.id, "upVote")}
        voteDown={() => votePost(post.id, "downVote")}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Radium(VotePost))
