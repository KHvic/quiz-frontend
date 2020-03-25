import { put, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { SET_ERROR } from './constants';

export function* toErrorPage() {
  yield put(push('/error'));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* appData() {
  yield all([takeLatest(SET_ERROR, toErrorPage)]);
}
