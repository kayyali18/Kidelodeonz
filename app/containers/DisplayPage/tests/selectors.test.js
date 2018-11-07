import { fromJS } from 'immutable'

import { selectDisplay, makeSelectStumble } from '../selectors'

describe('selectDisplay', () => {
  it('should select the display state', () => {
    const displayState = fromJS({
      stumble: {},
    })
    const mockedState = fromJS({
      display: displayState,
    })

    expect(selectDisplay(mockedState)).toEqual(displayState)
  })
})

describe('makeSelectStumble', () => {
  const stumbleSelector = makeSelectStumble()
  it('should select the stumble', () => {
    const stumble = fromJS({ title: 'stumble' })
    const mockedState = fromJS({
      display: {
        stumble,
      },
    })
    expect(stumbleSelector(mockedState)).toEqual(stumble)
  })
})
