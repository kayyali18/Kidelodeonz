/*
 * DisplayPage
 *
 * Here we display the results of the api call. All categories will be displayed 
 * here regardless of different routes
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector } from 'reselect'

import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'
import { DAEMON } from 'utils/constants'
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
import { displayStumble, stumbleSagaWatcher } from './actions'
import { makeSelectStumble } from './selectors'
import saga from './saga'

/* eslint-disable react/prefer-stateless-function */
export class DisplayPage extends React.PureComponent {
  handleSubmit = category => {
    const { categoryClick, apiData } = this.props
    categoryClick()
  }

  componentDidMount() {
    const { getStumble, apiData } = this.props
    if (!apiData) getStumble()
    setTimeout(() => {
      getStumble()
    }, 2000)
  }

  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>Stumble Page</title>
          <meta
            name="Stumble page with random result displayed"
            content="Random content from across the web"
          />
        </Helmet>
        <iframe title="Youtube Video" src={this.props.apiData.yUrl} />
      </Wrapper>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  dispatchLoadApi: () => dispatch(loadApi()),
  getStumble: () => dispatch(stumbleSagaWatcher()),
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
const withSaga = injectSaga({ key: 'display', saga, mode: DAEMON })

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(DisplayPage)
