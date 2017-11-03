import * as types from '../constants/actionTypes'

const initialState = {
  detail: {},
  list: [],
}

const posts = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_POST_SUCCEEDED:
      return {
        ...state,
        detail: action.data
      }
    case types.FETCH_POSTS_SUCCEEDED:
      return {
        ...state,
        list: action.data
      }
    case types.VOTE_POST_SUCCEEDED:
      return {
        list: state.list.map(l => {
          if(l.id === action.post.id) {
            return action.post
          }
          return l
        })
      }
    default: 
      return state
  }
}

export default posts
