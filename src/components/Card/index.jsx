import React, {useState} from 'react'

import Input from '../Input'

import { Container, Edit } from './style'

const Card = (props) => {
  const [isHover, setHover] = useState(false);
  const [name, updateName] = useState(props.name)
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
        <Edit onClick={() => props.isEditing ? props.saveEdit(name) : props.editTask(props.value)}>
          {props.isEditing ? 'Save' : 'Edit'}
        </Edit>
      }
    </Container>
  )
}

export default Card