import React, { Component } from 'react'
import Radium from 'radium'

const styles = {
  layout: {
    fontFamily: '"Avenir Next", Verdana, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", "游ゴシック", "Yu Gothic", "メイリオ", Meiryo, Osaka, sans-serif',
  }
}

class Layout extends Component {

  render() {
    return (
      <div style={styles.layout}>
        {this.props.children}
      </div>
    )
  }
}

export default Radium(Layout)
