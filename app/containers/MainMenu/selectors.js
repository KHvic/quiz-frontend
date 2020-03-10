import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainMenu state domain
 */

const selectMainMenuDomain = state => state.mainMenu || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by MainMenu
 */

const makeSelectMainMenu = () =>
  createSelector(
    selectMainMenuDomain,
    substate => substate,
  );

export default makeSelectMainMenu;
export { selectMainMenuDomain };
