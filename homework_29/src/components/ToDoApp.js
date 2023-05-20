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
          completeToDo={this.completeToDo}
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
    this.setState(prevState => {
      const toDoArray = [
        ...prevState.toDoArray,
        {
          id: Math.ceil(Number.MAX_SAFE_INTEGER * Math.random()),
          task,
          isFinished: false
        }
      ]

      this.setChachedToDoArray(toDoArray)
      return { toDoArray }
    })
  }

  removeToDo (id) {
    this.setState(prevState => {
      const removedOne = prevState.toDoArray
        .find(item => item.id === id)

      const toDoArray = prevState.toDoArray
        .filter(item => item !== removedOne)

      this.setChachedToDoArray(toDoArray)
      return { toDoArray }
    })
  }

  toggleFinished (id) {
    this.setState(prevState => {
      const toggledIndex = prevState.toDoArray.findIndex(item => item.id === id)
      const toggledOne = prevState.toDoArray[toggledIndex]

      const toDoArray = [...prevState.toDoArray]
      toDoArray[toggledIndex] = {
        id,
        task: toggledOne.task,
        isFinished: !toggledOne.isFinished
      }

      this.setChachedToDoArray(toDoArray)
      return { toDoArray }
    })
  }

  saveEditToDo (id, task) {
    this.setState(prevState => {
      const editedIndex = prevState.toDoArray.findIndex(item => item.id === id)
      const isFinished = prevState.toDoArray[editedIndex].isFinished

      const toDoArray = [...prevState.toDoArray]

      toDoArray[editedIndex] = {
        id,
        task,
        isFinished
      }

      this.setChachedToDoArray(toDoArray)
      return { toDoArray }
    })
  }
}

export default ToDoApp
