/*
 *
 * QuizPage actions
 *
 */

import {
  SET_SUBCAT,
  LOAD_QUESTIONS_SUCCESS,
  SELECT_QUESTION_CHOICE,
  SWITCH_QUESTION,
  SUBMIT_SELECTIONS,
  QUIT,
} from './constants';

export function setSubcat(subcat, count) {
  return {
    type: SET_SUBCAT,
    subcat,
    count,
  };
}

export function questionsLoaded(questions) {
  return {
    type: LOAD_QUESTIONS_SUCCESS,
    questions,
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

export function quit() {
  return {
    type: QUIT,
  };
}
