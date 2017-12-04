import React, { Component } from 'react'
import Radium from 'radium'
import * as sortBy from '../constants/sortBy'

const styles = {
  wrapper: {
    textAlign: 'center',
  }
}

class SortOperator extends Component {

  render() {
    const { onChangeSort } = this.props
    return (
      <div style={styles.wrapper}>
        <select onChange={(e) => onChangeSort(e)}>
          <option value={sortBy.DATE_UP}>date up</option>
          <option value={sortBy.DATE_DOWN}>date down</option>
          <option value={sortBy.SCORE_UP}>score up</option>
          <option value={sortBy.SCORE_DOWN}>score down</option>
        </select>
      </div>
    )
  }
}
export default Radium(SortOperator)
