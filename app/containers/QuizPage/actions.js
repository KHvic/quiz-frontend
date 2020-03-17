/*
 *
 * QuizPage actions
 *
 */

import {
  SET_SUBCAT,
  LOAD_QUESTIONS_SUCCESS,
  LOAD_QUESTIONS_ERROR,
  SELECT_QUESTION_CHOICE,
  SWITCH_QUESTION,
  SUBMIT_SELECTIONS,
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

export function selectQuestionChoice(optionIndex, choice) {
  return {
    type: SELECT_QUESTION_CHOICE,
    optionIndex,
    choice,
  };
}

export function switchQuestion(nextQuestionIndex) {
  return {
    type: SWITCH_QUESTION,
    nextQuestionIndex,
  };
}

export function submitSelections() {
  return {
    type: SUBMIT_SELECTIONS,
  };
}
