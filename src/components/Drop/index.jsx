import React from 'react'

import { Container, Header, Footer, DropArea, Column } from './style'

const Droppable = (props) => {
  return(
    <Container onDragOver={(e) => props.onDragOver(e, props.value)} onDrop={props.onDrop}>
      <Column>
        <Header>{props.headerText}</Header>
        <DropArea>{props.children}</DropArea>
        <Footer onClick={() => props.onAddItem(props.value)}>+    Add a card...</Footer>
      </Column>
    </Container>
  )
}

export default Droppable