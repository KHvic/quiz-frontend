/*
 *
 * QuizPage reducer
 *
 */
import produce from 'immer';
import {
  SET_SUBCAT,
  LOAD_QUESTIONS_SUCCESS,
  SELECT_QUESTION_CHOICE,
  SWITCH_QUESTION,
  SUBMIT_SELECTIONS,
} from './constants';

export const initialState = {
  questions: [],
  correctQuestions: new Set(), // also used to determine whether a question has been completed
  questionCount: 0,
  subcat: '',
  currentQuestion: 0,
  selections: [],
  reviewMode: false,
};

/* eslint-disable default-case, no-param-reassign */
const quizPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_SUBCAT:
        return {
          ...initialState,
          subcat: action.subcat,
          questionCount: action.count,
        };
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
          draft.correctQuestions.delete(questionIndex);
        } else {
          draft.selections[questionIndex][optionIndex].add(choice);
          let questionCompleted = true;
          state.questions[questionIndex].answers.forEach((answer, idx) => {
            if (draft.selections[questionIndex][idx].size < answer.length)
              questionCompleted = false;
          });
          if (questionCompleted) draft.correctQuestions.add(questionIndex);
        }
        break;
      }
      case SWITCH_QUESTION:
        draft.currentQuestion = action.nextQuestionIndex;
        break;
      case SUBMIT_SELECTIONS:
        draft.reviewMode = true;
        draft.currentQuestion = 0;
        draft.correctQuestions = new Set();
        state.questions.forEach((question, idx) => {
          let correct = true;
          question.answers.forEach((answer, optionIdx) => {
            answer.forEach(choice => {
              correct = correct && draft.selections[idx][optionIdx].has(choice);
            });
          });
          if (correct) draft.correctQuestions.add(idx);
        });
        break;
    }
  });

export default quizPageReducer;
