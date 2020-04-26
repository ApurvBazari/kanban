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
          name:"Task 1",
          status:"todo",
          key: 1
        },
        {
          name:"Task 2",
          status:"wip",
          key: 2
        },
        {
          name:"Task 4",
          status:"done",
          key: 3
        },
        {
          name:"Task 3",
          status:"todo",
          key: 4
        },
        {
          name:"Task 5",
          status:"done",
          key: 5
        },
        {
          name:"Task 6",
          status:"wip",
          key: 6
        }
      ],
      movingKey: null,
      editTaskKey: null
    }
  }

  onDragStart = (key) => {
    console.log('Started Dragging')
    this.setState({ movingKey: key })
  }

  onDragOver = (e, value) => {
    e.preventDefault();
    console.log('Drag Over');
    const { tasks, movingKey } = this.state
    let newTasks = tasks.filter(task => {
      if(task.key === movingKey){
        task.status = value;
      }
      return task
    })
    this.setState({ tasks: newTasks })
  }

  dragEnd = () => {
    console.log('Finished dragging ')
    this.setState({ movingKey: null })
  }

  editTask = key => {
    console.log('Edit task', key)
    this.setState({ editTaskKey: key })
  }

  saveEdit = name => {
    const { tasks, editTaskKey } = this.state
    let newTasks = tasks.filter(task => {
      if(task.key === editTaskKey){
        task.name = name;
      }
      return task
    })
    this.setState({
      editTaskKey: null,
      tasks: newTasks
    })
  }

  onDelete = key => {
    const { tasks } = this.state;
    let newTasks = tasks.filter(task => task.key !== key)
    this.setState({ tasks: newTasks })
  }

  onAddItem = status => {
    const { tasks } = this.state;
    const newTask = {
      name:"",
      status: status,
      key: tasks[tasks.length - 1].key + 1
    }
    tasks.push(newTask)
    this.setState({
      tasks: tasks,
      editTaskKey: newTask.key
    })
  }

  render() {
    const { tasks, editTaskKey, movingKey } = this.state;
    let tasksCards = {
      wip: [],
      done: [],
      todo: []
    };
    tasks.forEach(task => {
      tasksCards[task.status].push(
        <Draggable key={task.key} value={task.key} onDragStart={this.onDragStart} onDragEnd={this.dragEnd}>
          <Card
            value={task.key}
            isEditing={editTaskKey === task.key}
            name={task.name}
            saveEdit={this.saveEdit}
            editTask={this.editTask}
            onDelete={this.onDelete}
            isDragging={task.key === movingKey}
          />
        </Draggable>
      )
    })
    return(
      <Container>
        <Droppable onDrop={this.dragEnd} onDragOver={this.onDragOver} onAddItem={this.onAddItem} value='todo' headerText='Todo'>
          {tasksCards.todo}
        </Droppable>
        <Droppable onDrop={this.dragEnd} onDragOver={this.onDragOver} onAddItem={this.onAddItem} value='wip' headerText='Work In Progress'>
          {tasksCards.wip}
        </Droppable>
        <Droppable onDrop={this.dragEnd} onDragOver={this.onDragOver} onAddItem={this.onAddItem} value='done' headerText='Done'>
          {tasksCards.done}
        </Droppable>
      </Container>
    )
  }
}