import React from 'react'

import { Container } from './style'

const Card = (props) => {
  return(
    <Container backgroundColor={props.bgColor} textColor={props.textColor}>
      {props.children}
    </Container>
  )
}

export default Card