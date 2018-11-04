import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: calc(10px + 6 * ((100vw - 320px) / 680));
  text-decoration: none;
  border-radius: 8px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: calc(16px + 6 * ((100vw - 320px) / 680));
  border: none;
  color: #ff4a6e;

  &:active {
    background: red;
    color: #fff;
  }

  &:hover {
    background: linear-gradient(#ff700b, #ff275f);
    color: #fff;
  }
`
