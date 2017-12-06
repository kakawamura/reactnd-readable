import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  Button,
  Input,
  Form,
  Select,
} from 'antd'

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
      this.setState({
        post: post,
      })
    }
  }

  onChangeInput = (e, key) => {
    const val = (key === 'category') ? e : e.target.value
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
    const { categories, onClickSubmit } = this.props
    const { post } = this.state
    return (
      <div>
        <Form.Item
          label="Title">
          <Input
            value={post.title}
            onChange={(e) => this.onChangeInput(e, 'title')}/>
        </Form.Item>
        <Form.Item
          label="Body">
          <Input.TextArea
            rows={4}
            value={post.body}
            onChange={(e) => this.onChangeInput(e, 'body')}/>
        </Form.Item>
        <Form.Item
          label="Author">
          <Input
            value={post.author}
            onChange={(e) => this.onChangeInput(e, 'author')}/>
        </Form.Item>
        <Form.Item
          label="Category">
          <Select
            showSearch
            value={post.category}
            style={{ width: 200 }}
            placeholder="Select Category"
            onChange={(value) => this.onChangeInput(value, 'category')}>
            {categories.map(c => {
              return <Select.Option key={c.name} value={c.name}>
                {c.name}
                </Select.Option>
            })}
          </Select>
        </Form.Item>
        <Button 
          onClick={() => onClickSubmit(post)}
        >Send</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories.list,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
