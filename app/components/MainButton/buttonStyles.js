import { css } from 'styled-components'

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #fff;
  color: #fff;
  height: 100%;
  width: 100%;

  &:active {
    background: #fff;
    color: #fff;
  }
`
export default buttonStyles
