import ToDoItem from '../ToDoItem/'

import { shallowEqual, useSelector } from 'react-redux'
import { getIdArray } from '../../../storage/selectors'

function ToDoList (props) {
  const idArray = useSelector(getIdArray, shallowEqual)
  console.log(idArray)

  return (
    <div className='toDoList'>
      {idArray
        .map(id => <ToDoItem key={id} id={id} />)}
    </div>
  )
}

export default ToDoList
