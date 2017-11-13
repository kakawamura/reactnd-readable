import * as types from '../constants/actionTypes'

export const sortPosts = (sortBy) => {
  return {
    type: types.SORT_POSTS,
    sortBy,
  }
}
