import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Radium from 'radium'
import {
  Icon,
} from 'antd'
import * as types from '../constants/actionTypes'

const styles = {
  icon: {
    cursor: 'pointer',
    margin: '0 8px',
  }
}

class PostOperation extends Component {

  editPost = (id) => {
    const { history } = this.props  
    history.push(`posts/${id}/edit`)
  }

  render() {
    const { post, deletePost } = this.props
    return (
      <span>
        <Icon
          type="edit"
          style={styles.icon}
          onClick={() => this.editPost(post.id)} />
        <Icon
          type="delete"
          style={styles.icon}
          onClick={() => deletePost(post.id)} />
      </span>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => dispatch({type: types.DELETE_POST, id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Radium(PostOperation)))
