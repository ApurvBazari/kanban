import React from 'react'

import { Container } from './style'

const Button = (props) => {
  return (
    <Container color={props.color} onClick={props.onClick} marginLeft={props.marginLeft}>
      {props.children}
    </Container>
  )
}

export default Button;