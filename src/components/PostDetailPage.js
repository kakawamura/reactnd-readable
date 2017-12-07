import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import nl2br from 'react-nl2br'
import * as types from '../constants/actionTypes'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Post from './Post'
import NotFound from './NotFound'

class PostDetailPage extends Component {

  componentWillMount() {
    const { match, fetchPost, fetchPostComments } = this.props
    const id = match.params.postID
    fetchPost(id)
    fetchPostComments(id)
  }

  render() {
    const { posts, comments } = this.props
    
    if(posts.detail.id === undefined)  {
      return <NotFound />
    }

    return (
      <div>
        <Post
          post={posts.detail}
        />
        <div>
          {nl2br(posts.detail.body)}
        </div>
        <CommentList 
          comments={comments.list}
        />
        <AddComment
          post={posts.detail}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPost: (id) => dispatch({type: types.FETCH_POST, id}),
    fetchPostComments: (id) => dispatch({type: types.FETCH_POST_COMMENTS, id}),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetailPage)
