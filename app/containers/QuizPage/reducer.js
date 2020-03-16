/*
 *
 * QuizPage reducer
 *
 */
import produce from 'immer';
import {
  SET_SUBCAT,
  LOAD_QUESTIONS_ERROR,
  LOAD_QUESTIONS_SUCCESS,
} from './constants';

export const initialState = {
  questions: [],
  subcat: '',
  answers: [],
  currentQuestion: 0,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const quizPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_SUBCAT:
        draft.subcat = action.subcat;
        break;
      case LOAD_QUESTIONS_ERROR:
        draft.error = action.error;
        break;
      case LOAD_QUESTIONS_SUCCESS:
        draft.questions = action.questions;
        draft.currentQuestion = 0;
        break;
    }
  });

export default quizPageReducer;
