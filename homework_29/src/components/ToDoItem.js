import React from 'react'

class ToDoItem extends React.Component {
  render () {
    return (
      <div className='toDoItem'>
        <span>{this.props.body.task}</span>
      </div>
    )
  }
}

export default ToDoItem
