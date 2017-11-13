import { call, put, all, takeEvery } from 'redux-saga/effects'
import * as API from '../api'
import * as types from '../constants/actionTypes'

export function* fetchPosts(action) {
  try {
    const data = yield call(API.fetchPosts)
    yield put({type: types.FETCH_POSTS_SUCCEEDED, data})
  } catch (error) {
    yield put({type: "FETCH_FAILED", error})
  }
}

export function* fetchPost(action) {
  try {
    const data = yield call(API.fetchPost, action.id)
    yield put({type: types.FETCH_POST_SUCCEEDED, data})
  } catch (error) {
    yield put({type: "FETCH_FAILED", error})
  }
}

export function* fetchPostComments(action) {
  try {
    const data = yield call(API.fetchPostComments, action.id)
    yield put({type: types.FETCH_POST_COMMENTS_SUCCEEDED, data})
  } catch (error) {
    yield put({type: "FETCH_FAILED", error})
  }
}

export function* votePost(action) {
  try {
    const post = yield call(API.votePost, action.id, action.option)
    yield put({type: types.VOTE_POST_SUCCEEDED, post})
  } catch (error) {
    yield put({type: "VOTE_FAILED", error})
  }
}

export function* voteComment(action) {
  try {
    const comment = yield call(API.voteComment, action.id, action.option)
    yield put({type: types.VOTE_COMMENT_SUCCEEDED, comment})
  } catch (error) {
    yield put({type: "VOTE_FAILED", error})
  }
}

export function* createComment(action) {
  try {
    const comment = yield call(API.createComment, action.comment)
    console.log(comment)
    yield put({type: types.CREATE_COMMENT_SUCCEEDED, comment})
  } catch (error) {
    yield put({type: "VOTE_FAILED", error})
  }
}

export function* updateComment(action) {
  try {
    const comment = yield call(API.updateComment, action.id, action.body)
    yield put({type: types.UPDATE_COMMENT_SUCCEEDED, comment})
  } catch (error) {
    yield put({type: "VOTE_FAILED", error})
  }
}

export function* deleteComment(action) {
  try {
    const comment = yield call(API.deleteComment, action.id)
    yield put({type: types.DELETE_COMMENT_SUCCEEDED, comment})
  } catch (error) {
    yield put({type: "VOTE_FAILED", error})
  }
}

export function* watchAPI() {
  yield takeEvery(types.FETCH_POSTS, fetchPosts)
  yield takeEvery(types.FETCH_POST, fetchPost)
  yield takeEvery(types.FETCH_POST_COMMENTS, fetchPostComments)
  yield takeEvery(types.VOTE_POST, votePost)
  yield takeEvery(types.VOTE_COMMENT, voteComment)
  yield takeEvery(types.CREATE_COMMENT, createComment)
  yield takeEvery(types.UPDATE_COMMENT, updateComment)
  yield takeEvery(types.DELETE_COMMENT, deleteComment)
}

export default function* rootSaga() {
  yield all([
    watchAPI(),
  ])
}
