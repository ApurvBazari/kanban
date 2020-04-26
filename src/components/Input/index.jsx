import React from 'react'

import { TextInput } from './style'

const Input = (props) => {
  return (
    <TextInput
      type="text"
      onChange={(e) => props.onChange(e.target.value)}
      value={props.value}
      onKeyPress={(e) => {if (e.which === 13) props.onEnter()}}
    />
  )
}

export default Input;