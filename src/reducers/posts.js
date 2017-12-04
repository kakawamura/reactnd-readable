import * as types from '../constants/actionTypes'
import * as sortBy from '../constants/sortBy'

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
        ...state,
        list: state.list.map(l => {
          if(l.id === action.post.id) {
            return action.post
          }
          return l
        })
      }
    case types.DELETE_POST_SUCCEEDED:
      return {
        ...state,
        list: state.list.filter(l => {
          return l.id !== action.post.id    
        })
      }
    case types.SORT_POSTS:
      return {
        ...state,
        list: state.list.sort((a, b) => by(action.sortBy, a, b))
      }
    default: 
      return state
  }
}

const by = (option, a, b) => {
  switch(option) {
    case sortBy.DATE_DOWN:
      return a.timestamp - b.timestamp
    case sortBy.DATE_UP:
      return b.timestamp - a.timestamp
    case sortBy.SCORE_DOWN:
      return a.voteScore - b.voteScore
    case sortBy.SCORE_UP:
      return b.voteScore - a.voteScore
    default: 
      return true
  }
}

export default posts
