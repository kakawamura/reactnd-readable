import React, { Component } from 'react'
import Radium from 'radium'

const styles = {
  header: {
    textAlign: 'center',
    padding: '50px 0',
  },
  title: {
    fontWeight: 400,
  },
}

class Header extends Component {

  render() {
    return (
      <header style={styles.header}>
        <h1 style={styles.title}>Readable</h1>
      </header>
    )
  }
}

export default Radium(Header)
