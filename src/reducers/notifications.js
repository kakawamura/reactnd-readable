import * as types from '../constants/actionTypes'

const initialState = {
 error: "",
}

const notifications = (state = initialState, action) => {
  switch(action.type) {
    case types.REQUEST_FAILED: 
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}

export default notifications
