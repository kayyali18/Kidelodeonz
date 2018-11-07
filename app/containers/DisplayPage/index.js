/*
 * DisplayPage
 *
 * Here we display the results of the api call. All categories will be displayed 
 * here regardless of different routes
 */

import React from 'react'
import PropTypes from 'prop-types'
import { FormattedMessage } from 'react-intl'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import injectReducer from 'utils/injectReducer'
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
  makeSelectData,
} from 'containers/App/selectors'
import Button from 'components/MainButton/index'
import H1 from 'components/H1'
import Wrapper from './Wrapper'
import { loadApi } from '../App/actions'
import reducer from './reducer'
import { displayStumble } from './actions'
import { makeSelectStumble } from './selectors'

/* eslint-disable react/prefer-stateless-function */
export class DisplayPage extends React.PureComponent {
  handleSubmit = category => {
    const { categoryClick, apiData } = this.props
    categoryClick()
  }

  componentDidMount() {
    const { apiData } = this.props
    let num = Math.floor(Math.random() * 6) + 1
    console.log(apiData[num])
  }

  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Home Page</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <H1>Hi</H1>
        <Button
          type="submit"
          value="movie"
          path="/movie"
          onClick={() => this.handleSubmit('movie')}
        />
        <Button
          type="submit"
          value="game"
          path="/game"
          onClick={() => this.handleSubmit('game')}
        />
        <Button
          type="submit"
          value="show"
          path="/show"
          alt=""
          onClick={() => this.handleSubmit('show')}
        />
      </Wrapper>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  dispatchLoadApi: () => dispatch(loadApi()),
  categoryClick: stumble => dispatch(displayStumble(stumble)),
})

DisplayPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  categoryClick: PropTypes.func,
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  location: makeSelectLocation(),
  error: makeSelectError(),
  stumble: makeSelectStumble(),
  apiData: makeSelectData(),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

const withReducer = injectReducer({ key: 'display', reducer })

export default compose(
  withReducer,
  withConnect,
)(DisplayPage)
