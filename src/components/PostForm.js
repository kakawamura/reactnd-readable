import React, { Component } from 'react'

// title - [String]
// body - [String]
// author - [String]
// category - Any of the categories listed in 
class PostForm extends Component {

  state = {
    post : {
      title: '',
      body: '',
      author: '',
      category: '',
    }
  }

  componentWillReceiveProps(nextProps) {
    const { post } = nextProps
    if(post) {
      console.log(post)
      this.setState({
        post: post,
      })
    }
  }

  onChangeInput = (e, key) => {
    const val = e.target.value
    this.setState((state) => {
      return {
        ...state,
        post: {
          ...state.post,
          [key]: val,
        }
      }
    })
  }

  render() {
    const { onClickSubmit } = this.props
    const { post } = this.state
    return (
      <div>
        <label>
          Title
          <input
            value={post.title}
            onChange={(e) => this.onChangeInput(e, 'title')}/>
        </label>
        <label>
          Body
          <textarea 
            value={post.body}
            onChange={(e) => this.onChangeInput(e, 'body')}/>
        </label>
        <label>
          Author 
          <input
            value={post.author}
            onChange={(e) => this.onChangeInput(e, 'author')}/>
        </label>
        <label>
          Category
          <input 
            value={post.category}
            onChange={(e) => this.onChangeInput(e, 'category')}/>
        </label>
        <button 
          onClick={() => onClickSubmit(post)}
        >submit</button>
      </div>
    )
  }
}

export default PostForm

