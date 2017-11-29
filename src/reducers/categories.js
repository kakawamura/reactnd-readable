import * as types from '../constants/actionTypes'

const initialState = {
  list: [],
}

const categories = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_CATEGORIES_SUCCEEDED:
      return {
        ...state,
        list: action.data,
      }
    default:
      return state
  }
}

export default categories
