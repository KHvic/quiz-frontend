import { call, put, select, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { SET_SUBCAT } from './constants';
import { questionsLoaded, questionsLoadingError } from './actions';

import { makeSelectSubcat } from './selectors';

export function* getQuestions() {
  const subcat = yield select(makeSelectSubcat());
  const requestURL = `http://ec2-52-14-124-214.us-east-2.compute.amazonaws.com:8080/api/v1/category/${subcat}/questions?count=10`;
  try {
    const questions = yield call(request, requestURL);
    yield put(questionsLoaded(questions.data));
  } catch (err) {
    yield put(questionsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* questionsData() {
  yield takeLatest(SET_SUBCAT, getQuestions);
}
