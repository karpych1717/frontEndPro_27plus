import React from 'react'
import ToDoItem from './ToDoItem'

class ToDoList extends React.Component {
  render () {
    return (
      <div className='toDoList'>
        {this.props.toDoArray.map(item => {
          return (
            <ToDoItem
              key={item.id}
              body={item}
              removeToDo={this.props.removeToDo}
              toggleFinished={this.props.toggleFinished}
              saveEditToDo={this.props.saveEditToDo}
            />
          )
        })}
      </div>
    )
  }
}

export default ToDoList
