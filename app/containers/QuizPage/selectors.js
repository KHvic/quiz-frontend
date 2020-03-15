import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the quizPage state domain
 */

const selectQuizPageDomain = state => state.quizPage || initialState;

const makeSelectSubcat = () =>
  createSelector(
    selectQuizPageDomain,
    substate => substate.subcat,
  );

const makeSelectAnswers = () =>
  createSelector(
    selectQuizPageDomain,
    substate => substate.answers,
  );

const makeSelectQuestions = () =>
  createSelector(
    selectQuizPageDomain,
    substate => substate.questions,
  );

const makeSelectCurrentQuestion = () =>
  createSelector(
    selectQuizPageDomain,
    substate => substate.currentQuestion,
  );

const makeSelectError = () =>
  createSelector(
    selectQuizPageDomain,
    substate => substate.error,
  );

export {
  makeSelectSubcat,
  makeSelectAnswers,
  makeSelectQuestions,
  makeSelectCurrentQuestion,
  makeSelectError,
};
