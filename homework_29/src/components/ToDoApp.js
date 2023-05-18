import React from 'react'

import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

class ToDoApp extends React.Component {
  render () {
    return (
      <div className='ToDoApp'>
        <header><h1>ToDo</h1></header>

        <ToDoInput />
        <ToDoList />
      </div>
    )
  }
}

export default ToDoApp
