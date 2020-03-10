/*
 * MainMenu Messages
 *
 * This contains all the text for the MainMenu container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MainMenu';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the MainMenu container!',
  },
});
