/*
 * MainMenu Messages
 *
 * This contains all the text for the MainMenu container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MainMenu';

export default defineMessages({
  greVerbalHeader: {
    id: `${scope}.header`,
    title: `GRE Verbal Mock Test (10 Questions per test)`,
  },
  greVerbalPracticeHeader: {
    id: `${scope}.header`,
    title: `GRE Verbal Practice (1 Question)`,
  },
});
