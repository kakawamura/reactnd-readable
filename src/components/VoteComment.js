import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as types from '../constants/actionTypes'
import Vote from './Vote'

class VoteComment extends Component {

  render() {
    const { comment, voteComment } = this.props
    return (
      <Vote
        score={comment.voteScore}
        voteUp={() => voteComment(comment.id, "upVote")}
        voteDown={() => voteComment(comment.id, "downVote")}
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
    voteComment: (id, option) => dispatch({type: types.VOTE_COMMENT, id, option}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteComment)
