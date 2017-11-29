import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Radium from 'radium'

const styles = {
  header: {
    textAlign: 'center',
    padding: '64px 0',
  },
  title: {
    fontSize: 48,
    fontWeight: 400,
    padding: '16px 0',
  },
  category: {
    display: 'inline-block',
    margin: "0 4px",
  },
}

class Header extends Component {

  static propTypes = {
    categories: PropTypes.array
  }

  render() {
    const { categories } = this.props
    return (
      <header style={styles.header}>
        <Link to='/'>
          <h1 style={styles.title}>Readable</h1>
        </Link>
        <ul>
          {categories.map(c => {
            return (
              <li key={c.path} style={styles.category}>
                <Link to={`/${c.path}`}>
                  {c.name}
                </Link>
              </li>
            )
          })}
        </ul> 
      </header>
    )
  }
}

export default Radium(Header)
