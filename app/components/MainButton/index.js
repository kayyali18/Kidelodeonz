/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React, { Children } from 'react'
import PropTypes from 'prop-types'

import A from './A'
import Wrapper from './Wrapper'

function Button(props) {
  // Render an anchor tag
  const button = <A to={props.path}>{Children.toArray(props.children)}</A>

  return (
    <Wrapper to={props.path} onClick={props.onClick}>
      {button}
    </Wrapper>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
}

export default Button
