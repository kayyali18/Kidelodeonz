/*
 * Footer Messages
 *
 * This contains all the text for the Footer component.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.components.Footer'

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  },
  info: {
    id: `${scope}.info`,
    defaultMessage: 'Ahmad Kayyali 2019 © ',
  },
})
