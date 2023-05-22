import ToDoItem from './ToDoItem'

function ToDoList (props) {
  return (
    <div className='toDoList'>
      {props.toDoArray
        .map(item => {
          return (
            <ToDoItem
              key={item.id}
              body={item}
              removeToDo={props.removeToDo}
              toggleFinished={props.toggleFinished}
              saveEditToDo={props.saveEditToDo}
            />
          )
        })}
    </div>
  )
}

export default ToDoList
