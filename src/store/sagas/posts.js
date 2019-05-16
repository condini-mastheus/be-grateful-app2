import { put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as PostsActions } from '~/store/ducks/posts';

export function* getPosts(action) {
  try {
    const {
      payload: { dayId },
    } = action;

    const { data } = yield call(api.get, `/posts/${dayId}.json`);

    yield put(PostsActions.getPostsSuccess(data));
  } catch (e) {
    yield put(
      PostsActions.getPostsFailure('We are sorry, but we could not fetch this day posts :('),
    );
  }
}

export function* savePost(action) {
  try {
    const {
      payload: { newPost },
    } = action;

    const { data: post } = yield call(api.post, `/posts/${newPost.dayId}.json`, { ...newPost });

    const { data } = yield call(api.get, `/posts/${newPost.dayId}/${post.name}.json`);

    yield put(PostsActions.savePostSuccess(data));
  } catch (e) {
    yield put(PostsActions.savePostFailure('We are sorry, but your post was not saved :('));
  }
}
