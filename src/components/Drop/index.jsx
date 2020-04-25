import React from 'react'

import { Container, Header, Footer, DropArea, Column } from './style'

const Droppable = (props) => {
  return(
    <Container onDragOver={(e) => props.onDragOver(e, props.value)} bgColor={props.bgcolor}>
      <Column>
        <Header>{props.headerText}</Header>
        <DropArea>{props.children}</DropArea>
        <Footer>Add a card ...</Footer>
      </Column>
    </Container>
  )
}

export default Droppable