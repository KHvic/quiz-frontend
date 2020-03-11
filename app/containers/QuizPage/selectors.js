import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the quizPage state domain
 */

const selectQuizPageDomain = state => state.quizPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by QuizPage
 */

const makeSelectQuizPage = () =>
  createSelector(
    selectQuizPageDomain,
    substate => substate,
  );

export default makeSelectQuizPage;
export { selectQuizPageDomain };
