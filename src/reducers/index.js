import { combineReducers } from 'redux'
import posts from './posts'
import comments from './comments'
import categories from './categories'
import notifications from './notifications'

export default combineReducers({
  posts,
  comments,
  categories,
  notifications,
})
