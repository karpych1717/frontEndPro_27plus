import { useSelector } from 'react-redux'
import ToDoItem from '../ToDoItem'

function ToDoList (props) {
  const toDoArray = useSelector(store => store.todos)

  return (
    <div className='toDoList'>
      {toDoArray
        .map(item => {
          return (
            <ToDoItem
              key={item.id}
              body={item}
            />
          )
        })}
    </div>
  )
}

export default ToDoList
