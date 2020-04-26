import React, {useState, useEffect} from 'react'

import Input from '../Input'
import Button from '../Button'

import { Container } from './style'

const Card = (props) => {
  const [isHover, setHover] = useState(false);
  const [name, updateName] = useState(props.name);
  useEffect(() => {
    updateName(props.name)
  },[props.name])
  return(
    <Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {props.isEditing ?
        <Input
          value={name}
          onChange={(val) => updateName(val)}
          onEnter={() => props.saveEdit(name)}
        /> :
        name
      }
      {(isHover || props.isEditing) && 
        <Button
          color={props.isEditing ? 'lightblue' : 'lightgreen'}
          onClick={() => props.isEditing ? props.saveEdit(name) : props.editTask(props.value)}
        >
          {props.isEditing ? 'Save' : 'Edit'}
        </Button>
      }
    </Container>
  )
}

export default Card