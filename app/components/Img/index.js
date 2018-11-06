/**
 *
 * Img.js
 *
 * Renders an image, enforcing the usage of teh alt="" tag
 */

import React from 'react'
import PropTypes from 'prop-types'

function Img(props) {
  return <img className={props.className} src={props.src} alt={props.alt} />
}

// Require the use of src and alt because the internet is for everyone :)
Img.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Img
