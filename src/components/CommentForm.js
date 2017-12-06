import React, { Component } from 'react'
import { 
  Button,
  Form,
  Input,
} from 'antd'

class CommentForm extends Component {

  state = {
    author: '',
    body: '',
  }

  componentWillMount() {
   const { comment } = this.props
    if(comment) {
      this.setState({
        author: comment.author,
        body: comment.body,
      })
    }
  }

  onChangeAuthor = (e) => {
    this.setState({
      author: e.target.value,
    })
  }

  onChangeBody = (e) => {
    this.setState({
      body: e.target.value,
    })
  }

  onClick = (comment) => {
    const { onClickSubmit } = this.props
    onClickSubmit(comment)
    this.setState({
      author: '',
      body: '',
    })
  }

  render() {
    const { author, body } = this.state
    const { comment } = this.props
    return (
      <div>
        <Form.Item
          label="Author">
          <Input
            disabled={(comment !== undefined)}
            value={author}
            placeholder="Author"
            onChange={(e) => this.onChangeAuthor(e)}
          />
        </Form.Item>
        <Form.Item
          label="Comments">
          <Input.TextArea
            rows={4}
            placeholder="Comments"
            value={body}
            onChange={(e) => this.onChangeBody(e)}
          />
        </Form.Item>
        <Button
          onClick={() => this.onClick({author, body})}>
          Send
        </Button>
      </div>
    )
  }
}

export default CommentForm
