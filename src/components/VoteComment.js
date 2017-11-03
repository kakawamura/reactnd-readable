import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as types from '../constants/actionTypes'

class VoteComment extends Component {

  render() {
    const { comment, voteComment } = this.props
    return (
      <div>
        <button onClick={() => voteComment(comment.id, "upVote")}>up</button>
        <p>{comment.voteScore}</p>
        <button onClick={() => voteComment(comment.id, "downVote")}>down</button>
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
    voteComment: (id, option) => dispatch({type: types.VOTE_COMMENT, id, option}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VoteComment)
