import React from 'react'

const Draggable = (props) => {
  return(
    <div
      draggable
      onDragStart={() => props.onDragStart(props.value)}
      onDragEnd={props.onDragEnd}  
    >
      {props.children}
    </div>
  )
}

export default Draggable;