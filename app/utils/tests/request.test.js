/**
 * Test the request function
 */
// The Promise returned from fetch() won't reject on HTTP error status even if the response
// is an HTTP 404 or 500. Instead, it will resolve normally, and it will only reject on network
//  failure or if anything prevented the request from completing. For maximum browser compatibility
// when it comes to sending & receiving cookies, always supply the credentials: 'same-origin' option
// instead of relying on the default. (These comments are for future reference)
import 'whatwg-fetch'
import request from '../request'

describe('request', () => {
  // Before each test, stub the fetch function
  beforeEach(() => {
    window.fetch = jest.fn()
  })

  describe('stubbing successfull response', () => {
    // Before each test, pretent we got a successful response
    beforeEach(() => {
      const res = new Response('{"hello": "response"}', {
        status: 200,
        headers: {
          'Content-type': 'application/json',
        },
      })

      window.fetch.mockReturnValue(Promise.resolve(res))
    })

    it('should format the response correctly', done => {
      request('/thisUrlIsCorrect')
        .catch(done)
        .then(json => {
          expect(json.hello).toBe('response')
          done()
        })
    })
  })
})
