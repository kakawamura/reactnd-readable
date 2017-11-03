import React, { Component } from 'react'
import { connect } from 'react-redux'

class Vote extends Component {

  render() {
    const { post, votePost } = this.props
    return (
      <div>
        <button onClick={() => votePost(post.id, "upVote")}>up</button>
        <p>{post.voteScore}</p>
        <button onClick={() => votePost(post.id, "downVote")}>down</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Vote)
