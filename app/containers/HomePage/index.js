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
// import { loadApi } from '../App/actions'
import reducer from './reducer'
import saga from './saga'
import { fetchTasteDive } from './actions'

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  componentDidMount() {
    this.props.categoryClick()
  }

  render() {
    return (
      <section>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <button type="submit" onClick={this.props.categoryClick}>
          HELLLOOO CLICK ME!!!
        </button>
      </section>
    )
  }
}

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  categoryClick: PropTypes.func,
}

export function mapDispatchToProps(dispatch) {
  return {
    categoryClick: () => dispatch(fetchTasteDive()),
  }
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
