/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl'

export const scope = 'app.containers.HomePage'

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the HomePage container!',
  },
  movies: {
    id: `${scope}.movies`,
    defaultMessage: 'Movies',
  },
  games: {
    id: `${scope}.games`,
    defaultMessage: 'Games',
  },
  shows: {
    id: `${scope}.shows`,
    defaultMessage: 'Shows',
  },
})
