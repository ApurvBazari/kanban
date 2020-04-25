import React from 'react'

import Card from '../../components/Card'
import Draggable from '../../components/Drag'
import Droppable from '../../components/Drop'

import { Container } from './style'

export default class Board extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          name:"Learn Angular",
          status:"todo",
          key: 1
        },
        {
          name:"Learn React",
          status:"wip",
          key: 2
        },
        {
          name:"Learn Vue",
          status:"done",
          key: 3
        },
        {
          name:"Learn Node",
          status:"done",
          key: 4
        },
        {
          name:"Learn ES6",
          status:"done",
          key: 5
        },
        {
          name:"Learn Postgres",
          status:"done",
          key: 6
        }
      ],
      movingKey: null
    }
  }

  onDragStart = (key) => {
    console.log('Started Dragging')
    this.setState({
      movingKey: key
    })
  }

  onDragOver = (e, value) => {
    e.preventDefault();
    console.log('Drag Over')
    let newTasks = this.state.tasks.filter(task => {
      if(task.key === this.state.movingKey){
        task.status = value;
      }
      return task
    })
    this.setState({
      tasks: newTasks,
      isDragging: value
    })
  }

  dragEnd = () => {
    console.log('Finished dragging ')
    this.setState({
      isDragging: false,
      movingKey: null
    })
  }

  render() {
    const { tasks, isDragging } = this.state;
    let tasksCards = {
      wip: [],
      done: [],
      todo: []
    };
    tasks.forEach(task => {
      tasksCards[task.status].push(
        <Draggable value={task.key} onDragStart={this.onDragStart} dragEnd={this.dragEnd}>
          <Card bgColor={task.bgcolor}>{task.name}</Card>
        </Draggable>
      )
    })
    return(
      <Container>
        <Droppable taskHover={isDragging === 'todo'} bgcolor='black' onDragOver={this.onDragOver} value='todo' headerText='Todo'>
          {tasksCards.todo}
        </Droppable>
        <Droppable taskHover={isDragging === 'wip'} bgcolor='black' onDragOver={this.onDragOver} value='wip' headerText='Work In Progress'>
          {tasksCards.wip}
        </Droppable>
        <Droppable taskHover={isDragging === 'done'} bgcolor='black' onDragOver={this.onDragOver} value='done' headerText='Done'>
          {tasksCards.done}
        </Droppable>
      </Container>
    )
  }
}