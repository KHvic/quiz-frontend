/*
 *
 * QuizPage actions
 *
 */

import {
  SET_SUBCAT,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_ERROR,
} from './constants';

export function setSubcat(subcat) {
  return {
    type: SET_SUBCAT,
    subcat,
  };
}

export function questionsLoaded(questions) {
  return {
    type: LOAD_QUESTIONS_SUCCESS,
    questions,
  };
}

export function questionsLoadingError(error) {
  return {
    type: LOAD_QUESTIONS_ERROR,
    error,
  };
}
