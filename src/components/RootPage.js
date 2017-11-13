import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'
import * as actionTypes from '../constants/actionTypes'
import * as sortBy from '../constants/sortBy'
import {
  sortPosts,
} from '../actions/posts'

class RootPage extends Component {

  componentDidMount() {
    const { fetchPosts } = this.props
    fetchPosts()
  }

  onChangeSort(e) {
    const { sortPosts } = this.props
    sortPosts(e.target.value)
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        <select onChange={(e) => this.onChangeSort(e)}>
          <option value={sortBy.DATE_UP}>date up</option>
          <option value={sortBy.DATE_DOWN}>date down</option>
          <option value={sortBy.SCORE_UP}>score up</option>
          <option value={sortBy.SCORE_DOWN}>score down</option>
        </select>
        <PostList 
          posts={posts.list}
        />
      </div>
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
    sortPosts: (sortBy) => dispatch(sortPosts(sortBy))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootPage)
