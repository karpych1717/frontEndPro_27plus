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
              toggleFinished={this.props.toggleFinished}
            />
          )
        })}
      </div>
    )
  }
}

export default ToDoList
