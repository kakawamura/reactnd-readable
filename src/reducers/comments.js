import * as types from '../constants/actionTypes'

const initialState = {
  list: [],
}

const comments = (state = initialState, action) => {
  switch(action.type) {
    case types.FETCH_POST_COMMENTS_SUCCEEDED:
      return {
        ...state,
        list: action.data
      }
    case types.CREATE_COMMENT_SUCCEEDED:
      return {
        ...state,
        list: state.list.concat([action.comment])
      }
    case types.UPDATE_COMMENT_SUCCEEDED:
      return {
        ...state,
        list: state.list.map(l => {
          if(l.id === action.comment.id) {
            return action.comment
          }
          return l
        })
      }
    case types.DELETE_COMMENT_SUCCEEDED:
      return {
        ...state,
        list: state.list.filter(l => {
        return l.id !== action.comment.id
        })
      }
    case types.VOTE_COMMENT_SUCCEEDED:
      return {
        ...state,
        list: state.list.map(l => {
          if(l.id === action.comment.id) {
            return action.comment
          }
          return l
        })
      }
    default: 
      return state
  }
}

export default comments
