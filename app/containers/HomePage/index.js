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
import Button from 'components/MainButton/index'
import Wrapper from './Wrapper'
import messages from './messages'
import { loadApi } from '../App/actions'
import reducer from './reducer'
import saga from './saga'
import { updateStumble } from './actions'

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  handleSubmit = category => {
    const { categoryClick, dispatchLoadApi } = this.props
    categoryClick(category, 'cinderella')
    dispatchLoadApi()
  }

  render() {
    return (
      <Wrapper>
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <Button
          type="submit"
          value="movie"
          handleRoute={() => console.log('clicked')}
          src="https://images.unsplash.com/photo-1541367226819-6e682890e7ca?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=33ef8043bd9f782c6661b20f76ae9ccf&auto=format&fit=crop&w=800&q=60"
          onClick={() => this.handleSubmit('movie')}
        >
          <FormattedMessage {...messages.movies} />
        </Button>
        <Button
          type="submit"
          value="game"
          onClick={() => this.handleSubmit('game')}
        >
          <FormattedMessage {...messages.games} />
        </Button>
        <Button
          type="submit"
          value="show"
          onClick={() => this.handleSubmit('show')}
        >
          <FormattedMessage {...messages.shows} />
        </Button>
      </Wrapper>
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
