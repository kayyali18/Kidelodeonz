/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
// import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
} from 'containers/App/selectors'
import messages from './messages'
import { loadApi } from '../App/actions'
import reducer from './reducer'
import saga from './saga'
import { updateStumble } from './actions'
import { Button } from '../../components/Button'

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  handleSubmit = () => {
    const { categoryClick, dispatchLoadApi } = this.props
    categoryClick('movies', 'cinderella')
    dispatchLoadApi()
  }

  render() {
    return (
      <section>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <button type="submit" value="movie" onClick={this.handleSubmit}>
          <FormattedMessage {...messages.movies} />
        </button>
        <button type="submit" value="game" onClick={this.handleSubmit}>
          <FormattedMessage {...messages.games} />
        </button>
        <button type="submit" value="show" onClick={this.handleSubmit}>
          <FormattedMessage {...messages.shows} />
        </button>
      </section>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  dispatchLoadApi: () => dispatch(loadApi()),
  categoryClick: (category, query) => dispatch(updateStumble(category, query)),
})

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  categoryClick: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  location: makeSelectLocation(),
  error: makeSelectError(),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({ key: 'home', reducer })
const withSaga = injectSaga({ key: 'home', saga })

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage)
