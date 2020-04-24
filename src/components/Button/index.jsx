import React from 'react'

import { Button } from './style'

const MyButton = (props) => {
  return (
    <Button color={props.color}>{props.children}</Button>
  )
}

export default MyButton