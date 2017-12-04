import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'
import SortOperator from './SortOperator'
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

  onChangeSort = (e) => {
    const { sortPosts } = this.props
    sortPosts(e.target.value)
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        <SortOperator 
          onChangeSort={this.onChangeSort}
        />
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
