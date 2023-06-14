import ToDoItem from '../ToDoItem/'

import { shallowEqual, useSelector } from 'react-redux'
import { selectIdArray } from '../../../storage/selectors'

function ToDoList (props) {
  const idArray = useSelector(selectIdArray, shallowEqual)

  return (
    <div className='toDoList'>
      {idArray
        .map(id => <ToDoItem key={id} id={id} />)}
    </div>
  )
}

export default ToDoList
