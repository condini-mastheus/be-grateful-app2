import { put, call } from 'redux-saga/effects';

import api from '~/services/api';

import { Creators as PostsActions } from '~/store/ducks/posts';

function formatDate(date) {
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `0${month}`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('-');
}

export function* getPosts(action) {
  try {
    const {
      payload: { date },
    } = action;

    const formatedDate = formatDate(date);

    const initalDate = `${formatedDate}T00:00:00.000Z`;
    const finalDate = `${formatedDate}T23:59:59.9999Z`;

    const { data } = yield call(
      api.get,
      `/posts?date_gte=${initalDate}&date_lte=${finalDate}&_sort=date&_order=desc`,
    );

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
