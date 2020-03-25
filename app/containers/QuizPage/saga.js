import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import request from 'utils/request';
import { SET_SUBCAT, QUIT } from './constants';
import { questionsLoaded } from './actions';
import { setError } from '../App/actions';

import { makeSelectSubcat, makeSelectQuestionCount } from './selectors';

export function* getQuestions() {
  const subcat = yield select(makeSelectSubcat());
  const count = yield select(makeSelectQuestionCount());
  const requestURL = `http://ec2-52-14-124-214.us-east-2.compute.amazonaws.com:8080/api/v1/category/${subcat}/questions?count=${count}`;
  try {
    const questions = yield call(request, requestURL);
    yield put(questionsLoaded(questions.data));
  } catch (err) {
    yield put(setError(err));
  }
}

export function* toMainMenu() {
  yield put(push('/'));
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* questionsData() {
  yield all([
    takeLatest(SET_SUBCAT, getQuestions),
    takeLatest(QUIT, toMainMenu),
  ]);
}
