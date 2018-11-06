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
import H1 from 'components/H1'
import TextWrapper from 'components/MainButton/TextWrapper'
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
        <H1>
          <FormattedMessage {...messages.header} />
        </H1>
        <Button
          type="submit"
          value="movie"
          path="/movie"
          onClick={() => this.handleSubmit('movie')}
        >
          <TextWrapper>
            <FormattedMessage {...messages.movies} />
          </TextWrapper>
        </Button>
        <Button
          type="submit"
          value="game"
          path="/game"
          onClick={() => this.handleSubmit('game')}
        >
          <TextWrapper>
            <FormattedMessage {...messages.games} />
          </TextWrapper>
        </Button>
        <Button
          type="submit"
          value="show"
          path="/show"
          alt=""
          onClick={() => this.handleSubmit('show')}
        >
          <TextWrapper>
            <FormattedMessage {...messages.shows} />
          </TextWrapper>
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
