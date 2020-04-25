import React from 'react'

import { Container } from './style'

const Droppable = (props) => {
  return(
    <Container onDragOver={(e) => props.onDragOver(e, props.value)} bgColor={props.bgcolor}>
      {props.children}
    </Container>
  )
}

export default Droppable