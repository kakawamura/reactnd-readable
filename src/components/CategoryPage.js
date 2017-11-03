import React, { Component } from 'react'
import { connect } from 'react-redux'
import PostList from './PostList'

class CategoryPage extends Component {

  componentWillMount() {
    const { fetchPosts } = this.props
    fetchPosts()
  }

  render() {
    const { match, posts } = this.props
    return (
      <div>
        <PostList 
          posts={posts.list.filter(p => {
            return p.category === match.params.category
          })}
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
