/** Absolute Imports Here */
import React from 'react'

/** Components Imports Here */
import Card from '../../components/Card'
import Draggable from '../../components/Drag'
import Droppable from '../../components/Drop'

/** Styles Imports Here */
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
      movingKey: null, // Keeps track of task key being dragged
      editTaskKey: null // Keeps track of task being edited
    }
  }

  /** Sets the movingKey to the task key being dragged */
  onDragStart = (key) => {
    this.setState({ movingKey: key })
  }

  /** Changes the status of the dragged card to the column value */
  onDragOver = (e, value) => {
    e.preventDefault();
    const { tasks, movingKey } = this.state
    let newTasks = tasks.filter(task => {
      if(task.key === movingKey){
        task.status = value;
      }
      return task
    })
    this.setState({ tasks: newTasks })
  }

  /** Updates when the drag/drop is done */
  dragEnd = () => {
    this.setState({ movingKey: null })
  }

  /** Sets the editTaskKey to the task key being edited */
  editTask = key => {
    this.setState({ editTaskKey: key })
  }

  /** Updates the task name being edited */
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

  /** Deletes the task based on key being passed */
  onDelete = key => {
    const { tasks } = this.state;
    let newTasks = tasks.filter(task => task.key !== key)
    this.setState({ tasks: newTasks })
  }

  /** Creates new empty task for the column based on status(column value) passed */
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