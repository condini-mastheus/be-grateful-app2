import { all, takeLatest } from 'redux-saga/effects';

import { Types as PostsTypes } from '~/store/ducks/posts';
import { getPosts } from './posts';

export default function* rootSaga() {
  yield all([takeLatest(PostsTypes.LOAD_REQUEST, getPosts)]);
}
