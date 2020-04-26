import React, {useState, useEffect} from 'react'

import Input from '../Input'
import Button from '../Button'
import Image from '../Image'

import DeleteIcon from '../../icons/delete.png'
import EditIcon from '../../icons/edit.png'
import DoneIcon from '../../icons/done.png'

import { Container, Edit } from './style'

const Card = (props) => {
  const [isHover, setHover] = useState(false);
  const [name, updateName] = useState(props.name);
  useEffect(() => {
    updateName(props.name)
  },[props.name])
  return(
    <Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} isDragging={props.isDragging}>
      {props.isEditing ?
        <Input
          value={name}
          onChange={(val) => updateName(val)}
          onEnter={() => props.saveEdit(name)}
        /> :
        name
      }
      {(isHover || props.isEditing) && 
        <Edit>
          <Button
            color={props.isEditing ? 'lightblue' : 'lightgreen'}
            onClick={() => props.isEditing ? props.saveEdit(name) : props.editTask(props.value)}
          >
            <Image src={props.isEditing ? DoneIcon : EditIcon} alt='' width={20} height={20} />
          </Button>
          {!props.isEditing && (
            <Button color='red' onClick={() => props.onDelete(props.value)} marginLeft={5}>
              <Image src={DeleteIcon} alt='' width={20} height={20} />
            </Button>
          )}
        </Edit>
      }
    </Container>
  )
}

export default Card