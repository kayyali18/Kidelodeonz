import React from 'react'
import { mount } from 'enzyme'
import H1 from 'components/H1'
import { shallowWrap } from 'utils/contextWrapper'
import { DisplayPage, mapDispatchToProps } from '../index'
import { RUN_STUMBLE_SAGA } from '../constants'
import { LOAD_API } from '../../App/constants'

const children = <H1 />

describe('<DisplayPage />', () => {
  let wrapper
  let props

  it('should match the snapshot', () => {
    wrapper = () => shallowWrap(<DisplayPage />)
    expect(wrapper).toMatchSnapshot()
  })

  it('should return <Loading /> if stumble is false', () => {
    props = { apiData: true, stumble: false }
    wrapper = mount(<DisplayPage {...props} />)
    expect(wrapper.contains(children)).toEqual(false)
  })

  it('should have children if stumble is not false', () => {
    props = { apiData: true, stumble: true }
    wrapper = mount(<DisplayPage {...props} />)
    expect(wrapper.contains(children)).toEqual(true)
  })
})

describe('getStumble', () => {
  let dispatch
  let mappedProps
  beforeEach(() => {
    dispatch = jest.fn()
    mappedProps = mapDispatchToProps(dispatch)
  })

  it('should map a function to getStumble', () => {
    expect(mappedProps.getStumble).toBeDefined()
  })

  it('should dispatch the stumbleSaga action', () => {
    const expected = {
      type: RUN_STUMBLE_SAGA,
    }
    mappedProps.getStumble()
    expect(dispatch).toHaveBeenCalledWith(expected)
  })
})

describe('dispatchLoadApi', () => {
  let dispatch
  let mappedProps
  beforeEach(() => {
    dispatch = jest.fn()
    mappedProps = mapDispatchToProps(dispatch)
  })

  it('should map a function to dispatchLoadApi', () => {
    expect(mappedProps.dispatchLoadApi).toBeDefined()
  })

  it('should dispatch the loadApi action', () => {
    const expected = {
      type: LOAD_API,
    }
    mappedProps.dispatchLoadApi()
    expect(dispatch).toHaveBeenCalledWith(expected)
  })
})
