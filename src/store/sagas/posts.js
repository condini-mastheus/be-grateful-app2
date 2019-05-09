import { put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as PostsActions } from '~/store/ducks/posts';

export function* getPosts() {
  try {
    const { data } = yield call(api.get, '/posts?_sort=date&_order=desc');

    yield put(PostsActions.getPostsSuccess(data));
  } catch (e) {
    console.tron.error(e);
  }
}

export function* savePost(action) {
  try {
    const {
      payload: { newPost },
    } = action;

    const { data } = yield call(api.post, '/posts', { ...newPost });

    yield put(PostsActions.savePostSuccess(data));
  } catch (e) {
    console.tron.error(e);
  }
}
