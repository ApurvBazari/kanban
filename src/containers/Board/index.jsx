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
          bgcolor: "yellow",
          key: 1
        },
        {
          name:"React",
          status:"wip",
          bgcolor:"pink",
          key: 2
        },
        {
          name:"Vue",
          status:"done",
          bgcolor:"skyblue",
          key: 3
        }
      ],
      movingKey: null
    }
  }

  onDragStart = (key) => {
    this.setState({
      movingKey: key
    })
  }

  onDragOver = (e, value) => {
    e.preventDefault();
    const { tasks, movingKey } = this.state;
    let newTasks = tasks.filter(task => {
      if(task.key === movingKey)
        task.status = value;
      return task
    })
    this.setState({
      ...this.state,
      tasks: newTasks
    })
  }

  render() {
    const { tasks } = this.state;
    let tasksCards = {
      wip: [],
      done: [],
      todo: []
    };
    tasks.forEach(task => {
      tasksCards[task.status].push(
        <Draggable value={task.key} onDragStart={this.onDragStart}>
          <Card bgColor={task.bgcolor}>{task.name}</Card>
        </Draggable>
      )
    })
    return(
      <Container>
        <Droppable bgcolor='black' onDragOver={this.onDragOver} value='todo' headerText='Todo'>
          {tasksCards.todo}
        </Droppable>
        <Droppable bgcolor='black' onDragOver={this.onDragOver} value='wip' headerText='Work In Progress'>
          {tasksCards.wip}
        </Droppable>
        <Droppable bgcolor='black' onDragOver={this.onDragOver} value='done' headerText='Done'>
          {tasksCards.done}
        </Droppable>
      </Container>
    )
  }
}