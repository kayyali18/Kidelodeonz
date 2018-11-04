import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default styled(Link)`
  display: inline-flex;
  /* padding: 0.25em 2em; */
  height: 90%;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  border-radius: 0px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: calc(10px + 6 * ((100vw - 320px) / 680));
  border: none;
  color: #fff;
  width: calc(0.3 * 100vw);

  &:hover {
    background: #fff;
    color: #ff700b;
  }
`
