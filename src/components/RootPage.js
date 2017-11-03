import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'

class RootPage extends Component {

  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts()
  }

  render() {
    const { posts } = this.props
    return (
      <PostList 
        posts={posts.list}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch({type: 'FETCH_POSTS'}),
    votePost: (id, option) => dispatch({type: 'VOTE_POST', id, option}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootPage)
