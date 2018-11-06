import { css } from 'styled-components'

const buttonStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  text-decoration: none;
  border-radius: 14px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 26px;
  border: 10px solid #fff;
  background-color: #ffffff4d;
  color: #ff4a6e;
  height: calc(100px + 100 * ((100vw - 320px) / 680));
  width: calc(400px + 130 * ((100vw - 320px) / 680));

  &:active {
    background: #fff;
    color: #fff;
  }

  &:hover {
    background-color: #ffffff66;
  }
`
export default buttonStyles
