import * as types from '../constants/actionTypes'
import * as sortBy from '../constants/sortBy'
import { sort } from 'immutable-sort'

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
    case types.SORT_POSTS:
      return {
        ...state,
        list: state.list.sort((a, b) => by(a, b))
      }
    default: 
      return state
  }
}

const by = (a, b) => {
  switch(sortBy) {
    case sortBy.DATE_UP:
      return a.timestamp < b.timestamp
    case sortBy.DATE_DOWN:
      return a.timestamp > b.timestamp
    case sortBy.SCORE_UP:
      return a.voteScore > b.voteScore
    case sortBy.SCORE_DOWN:
      return a.voteScore < b.voteScore
    default: 
      return true
  }
}

export default posts
