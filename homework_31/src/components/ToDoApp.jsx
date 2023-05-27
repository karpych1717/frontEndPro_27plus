import { useState } from 'react'

import ToDoInput from './ToDoInput'
import ToDoList from './ToDoList'

function ToDoApp (props) {
  const [toDoArray, setToDoArray] = useState(getChachedToDoArray())

  return (
    <div className='toDoApp'>
      <ToDoInput
        addToDo={addToDo}
      />
      <ToDoList
        toDoArray={toDoArray}
        toggleFinished={toggleFinished}
        saveEditToDo={saveEditToDo}
        removeToDo={removeToDo}
      />
    </div>
  )

  function getChachedToDoArray () {
    const toDoArray = JSON.parse(
      window.localStorage.getItem('ToDos')
    )

    return toDoArray || []
  }

  function setChachedToDoArray (toDoArray) {
    window.localStorage.setItem('ToDos', JSON.stringify(toDoArray))
  }

  function addToDo (task) {
    const newToDoArray = [
      ...toDoArray,
      {
        id: Math.ceil(Number.MAX_SAFE_INTEGER * Math.random()),
        task,
        isFinished: false
      }
    ]

    setToDoArray(newToDoArray)
    setChachedToDoArray(newToDoArray)
  }

  function removeToDo (id) {
    const removedOne = toDoArray
      .find(item => item.id === id)

    const newToDoArray = toDoArray
      .filter(item => item !== removedOne)

    setToDoArray(newToDoArray)
    setChachedToDoArray(newToDoArray)
  }

  function toggleFinished (id) {
    const toggledIndex = toDoArray.findIndex(item => item.id === id)
    const toggledOne = toDoArray[toggledIndex]

    const newToDoArray = [...toDoArray]
    newToDoArray[toggledIndex] = {
      id,
      task: toggledOne.task,
      isFinished: !toggledOne.isFinished
    }

    setToDoArray(newToDoArray)
    setChachedToDoArray(newToDoArray)
  }

  function saveEditToDo (id, task) {
    const editedIndex = toDoArray.findIndex(item => item.id === id)
    const isFinished = toDoArray[editedIndex].isFinished

    const newToDoArray = [...toDoArray]

    newToDoArray[editedIndex] = {
      id,
      task,
      isFinished
    }

    setToDoArray(newToDoArray)
    setChachedToDoArray(newToDoArray)
  }
}

export default ToDoApp
