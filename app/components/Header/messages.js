/*
 * Header Messages
 *
 * This contains all the text for the Header component.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.components.Header'

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Home',
  },
  about: {
    id: `${scope}.about`,
    defaultMessage: 'About',
  },
  title: {
    id: `${scope}.title`,
    defaultMessage: 'Kidelodeon',
  },
  contact: {
    id: `${scope}.contact`,
    defaultMessage: 'Contact',
  },
  faq: {
    id: `${scope}.faq`,
    defaultMessage: 'FAQ',
  },
})
