import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

const Image = (props) => {
  return(
    <Container src={props.src} width={props.width} height={props.height} alt={props.alt} />
  )
}

Image.propTypes = {
  /** The image source */
  src: PropTypes.string.isRequired,

  /** The width of the Image */
  width: PropTypes.number,

  /** The height of the Image */
  height: PropTypes.number,

  /** Alt text to be shown for fallback and SEO */
  alt: PropTypes.string
}

Image.defaultProps = {
  width: 20,
  height: 20,
  alt: ''
}

export default Image