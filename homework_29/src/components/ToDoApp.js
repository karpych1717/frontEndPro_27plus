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
    this.toggleFinished = this.toggleFinished.bind(this)
  }

  render () {
    console.log(this.state.toDoArray)

    return (
      <div className='toDoApp'>
        <header><h1>ToDo</h1></header>

        <ToDoInput
          addToDo={this.addToDo}
        />
        <ToDoList
          toDoArray={this.state.toDoArray}
          toggleFinished={this.toggleFinished}
          updateToDo={this.updateToDo}
          completeToDo={this.completeToDo}
          removeTodo={this.removeTodo}
        />
      </div>
    )
  }

  getChachedToDoArray () {
    return []
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

      return { toDoArray }
    })
  }

  toggleFinished (id) {
    this.setState(prevState => {
      const toggledOne = prevState.toDoArray.find(item => item.id === id)

      const toDoArray = [
        ...prevState.toDoArray.filter(item => item !== toggledOne),
        {
          id,
          task: toggledOne.task,
          isFinished: !toggledOne.isFinished
        }
      ]

      return { toDoArray }
    })
  }
}

export default ToDoApp
