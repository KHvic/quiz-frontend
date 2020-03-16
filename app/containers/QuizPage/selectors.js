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

const makeSelectSelections = () =>
  createSelector(
    selectQuizPageDomain,
    substate => substate.selections,
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

const makeSelectReviewMode = () =>
  createSelector(
    selectQuizPageDomain,
    substate => substate.reviewMode,
  );

const makeSelectError = () =>
  createSelector(
    selectQuizPageDomain,
    substate => substate.error,
  );

export {
  makeSelectSubcat,
  makeSelectSelections,
  makeSelectQuestions,
  makeSelectCurrentQuestion,
  makeSelectReviewMode,
  makeSelectError,
};
