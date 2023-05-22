import React from 'react'

import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

class ToDoApp extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      toDoArray: this.getChachedToDoArray()
    }

    this.addToDo = this.addToDo.bind(this)
    this.removeToDo = this.removeToDo.bind(this)
    this.toggleFinished = this.toggleFinished.bind(this)
    this.saveEditToDo = this.saveEditToDo.bind(this)
  }

  render () {
    return (
      <div className='toDoApp'>
        <header><h1>ToDo</h1></header>

        <ToDoInput
          addToDo={this.addToDo}
        />
        <ToDoList
          toDoArray={this.state.toDoArray}
          toggleFinished={this.toggleFinished}
          saveEditToDo={this.saveEditToDo}
          removeToDo={this.removeToDo}
        />
      </div>
    )
  }

  getChachedToDoArray () {
    const toDoArray = JSON.parse(
      window.localStorage.getItem('ToDos')
    )

    return toDoArray || []
  }

  setChachedToDoArray (toDoArray) {
    window.localStorage.setItem('ToDos', JSON.stringify(toDoArray))
  }

  addToDo (task) {
    const toDoArray = [
      ...this.state.toDoArray,
      {
        id: Math.ceil(Number.MAX_SAFE_INTEGER * Math.random()),
        task,
        isFinished: false
      }
    ]

    this.setStateAndChache(toDoArray)
  }

  removeToDo (id) {
    const removedOne = this.state.toDoArray
      .find(item => item.id === id)

    const toDoArray = this.state.toDoArray
      .filter(item => item !== removedOne)

    this.setStateAndChache(toDoArray)
  }

  toggleFinished (id) {
    const toggledIndex = this.state.toDoArray.findIndex(item => item.id === id)
    const toggledOne = this.state.toDoArray[toggledIndex]

    const toDoArray = [...this.state.toDoArray]
    toDoArray[toggledIndex] = {
      id,
      task: toggledOne.task,
      isFinished: !toggledOne.isFinished
    }

    this.setStateAndChache(toDoArray)
  }

  saveEditToDo (id, task) {
    const editedIndex = this.state.toDoArray.findIndex(item => item.id === id)
    const isFinished = this.state.toDoArray[editedIndex].isFinished

    const toDoArray = [...this.state.toDoArray]

    toDoArray[editedIndex] = {
      id,
      task,
      isFinished
    }

    this.setStateAndChache(toDoArray)
  }

  setStateAndChache (toDoArray) {
    this.setState(
      { toDoArray },
      () => this.setChachedToDoArray(toDoArray)
    )
  }
}

export default ToDoApp
