import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Radium from 'radium'
import * as types from '../constants/actionTypes'
import Trash from 'react-icons/lib/fa/trash-o'
import Edit from 'react-icons/lib/fa/edit'

const styles = {
  icon: {
    cursor: 'pointer',
    padding: 8,
    fontSize: 20,
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
      <div>
        <Trash 
          style={styles.icon}
          onClick={() => deletePost(post.id)} />
        <Edit 
          style={styles.icon}
          onClick={() => this.editPost(post.id)} />
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
    deletePost: (id) => dispatch({type: types.DELETE_POST, id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Radium(PostOperation)))
