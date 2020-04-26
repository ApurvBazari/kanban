import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './style'

const Button = (props) => {
  return (
    <Container color={props.color} onClick={props.onClick} marginLeft={props.marginLeft}>
      {props.children}
    </Container>
  )
}

Button.propTypes = {
  /** The color of the button */
  color: PropTypes.string,

  /** The onClick function handler for the Button */
  onClick: PropTypes.func.isRequired,

  /** The Left Margin for the Button Container */
  marginLeft: PropTypes.number,
}

Button.defaultProps = {
  color: 'white',
  marginLeft: 0
}

export default Button;