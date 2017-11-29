import React, { Component } from 'react'

// title - [String]
// body - [String]
// author - [String]
// category - Any of the categories listed in 
class PostForm extends Component {

  state = {
    form: {
      title: '',
      body: '',
      author: '',
      category: '',
    }
  }

  onChangeInput = (e, key) => {
    const val = e.target.value
    this.setState((state) => {
      return {
        ...state,
        form: {
          ...state.form,
          [key]: val,
        }
      }
    })
  }

  render() {
    const { onClickSubmit } = this.props
    const { form } = this.state
    console.log(form)
    return (
      <div>
        <label>
          Title
          <input onChange={(e) => this.onChangeInput(e, 'title')}/>
        </label>
        <label>
          Body
          <textarea onChange={(e) => this.onChangeInput(e, 'body')}/>
        </label>
        <label>
          Author 
          <input onChange={(e) => this.onChangeInput(e, 'author')}/>
        </label>
        <label>
          Category
          <input onChange={(e) => this.onChangeInput(e, 'category')}/>
        </label>
        <button 
          onClick={() => onClickSubmit(form)}
        >submit</button>
      </div>
    )
  }
}

export default PostForm

