import React from 'react'

import { Container } from './style'

const Image = (props) => {
  return(
    <Container src={props.src} width={props.width} height={props.height} alt={props.alt} />
  )
}

export default Image