import React, { Component } from 'react'
import Radium from 'radium'
import {
  Icon,
} from 'antd'

const styles = {
  button: {
    margin: '0 8px',
    cursor: 'pointer',
  }
}

class Vote extends Component {

  render() {
    const { score, voteUp, voteDown } = this.props
    return (
      <span>
        <Icon
          style={styles.button}
          type="like-o"
          onClick={() => voteUp()} />
        <span>{score}</span>
        <Icon
          style={styles.button}
          type="dislike-o"
          onClick={() => voteDown()} />
      </span>
    )
  }
}

export default Radium(Vote)
