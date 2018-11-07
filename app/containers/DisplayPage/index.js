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
import H1 from 'components/H1'
import Loading from 'components/Loading'
import Wrapper from './Wrapper'
import { loadApi } from '../App/actions'
import reducer from './reducer'
import { stumbleSagaWatcher } from './actions'
import { makeSelectStumble } from './selectors'
import saga from './saga'

/* eslint-disable react/prefer-stateless-function */
export class DisplayPage extends React.PureComponent {
  componentDidMount() {
    const { getStumble, apiData } = this.props
    if (!apiData) getStumble()
    setTimeout(() => {
      getStumble()
    }, 2000)
  }

  render() {
    const { stumble } = this.props
    if (!stumble) return <Loading />
    return (
      <Wrapper>
        <Helmet>
          <title>Stumble Page</title>
          <meta
            name="Stumble page with random result displayed"
            content="Random content from across the web"
          />
        </Helmet>
        <H1>{this.props.stumble.wTeaser}</H1>
        <iframe title="Youtube Video" src={this.props.stumble.yUrl} />
      </Wrapper>
    )
  }
}

export const mapDispatchToProps = dispatch => ({
  dispatchLoadApi: () => dispatch(loadApi()),
  getStumble: () => dispatch(stumbleSagaWatcher()),
})

DisplayPage.propTypes = {
  // loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  apiData: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  getStumble: PropTypes.func,
  stumble: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
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
