import { combineReducers } from 'redux'

const initialState = {
  list: [],
}
const posts = (state = initialState, action) => {
  return state
}

export default combineReducers({
  posts,
})
