import { put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as PostsActions } from '~/store/ducks/posts';

export function* getPosts() {
  try {
    const { data } = yield call(api.get, '/posts');

    yield put(PostsActions.getPostsSuccess(data));
  } catch (e) {
    console.tron.error(e);
  }
}
