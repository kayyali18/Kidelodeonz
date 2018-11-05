import { fromJS } from 'immutable'

import { selectHome, makeSelectQuery } from '../selectors'

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      category: '',
      query: '',
    })
    const mockedState = fromJS({
      home: homeState,
    })
    expect(selectHome(mockedState)).toEqual(homeState)
  })
})

describe('makeSelectQuery', () => {
  const querySelector = makeSelectQuery()
  it('should select the query', () => {
    const query = 'cars'
    const category = 'movies'
    const mockedState = fromJS({
      home: {
        category,
        query,
      },
    })
    expect(querySelector(mockedState)).toEqual(query)
  })
})
