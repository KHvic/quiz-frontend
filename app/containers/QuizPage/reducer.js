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
  SELECT_QUESTION_CHOICE,
  SWITCH_QUESTION,
  SUBMIT_SELECTIONS,
} from './constants';

export const initialState = {
  questions: [],
  questionCount: 0,
  subcat: '',
  currentQuestion: 0,
  selections: [],
  error: null,
  reviewMode: false,
};

/* eslint-disable default-case, no-param-reassign */
const quizPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_SUBCAT:
        draft.subcat = action.subcat;
        draft.questionCount = action.count;
        break;
      case LOAD_QUESTIONS_ERROR:
        draft.error = action.error;
        break;
      case LOAD_QUESTIONS_SUCCESS:
        draft.questions = action.questions;
        draft.reviewMode = false;
        draft.currentQuestion = 0;
        draft.selections = new Array(action.questions.length);
        action.questions.forEach((question, i) => {
          draft.selections[i] = new Array(question.options.length).fill(
            new Set(),
          );
        });
        break;
      case SELECT_QUESTION_CHOICE: {
        const questionIndex = state.currentQuestion;
        const { optionIndex, choice } = { ...action };
        if (draft.selections[questionIndex][optionIndex].has(choice)) {
          draft.selections[questionIndex][optionIndex].delete(choice);
        } else {
          draft.selections[questionIndex][optionIndex].add(choice);
        }
        break;
      }
      case SWITCH_QUESTION:
        draft.currentQuestion = action.nextQuestionIndex;
        break;
      case SUBMIT_SELECTIONS:
        // TODO: add proper submission logic at action.js
        draft.reviewMode = true;
        draft.currentQuestion = 0;
        break;
    }
  });

export default quizPageReducer;
