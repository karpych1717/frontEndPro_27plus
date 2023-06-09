// Core
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
// Parts
import Button from './form/Button'
// Engine
import todosSlice from '../../../storage/todosSlice'

function TodoItem (props) {
  const [isEdit, setEdit] = useState(false)

  const { isReady, text, id } = props
  const items = useSelector(state => state.todos.items)
  const dispatch = useDispatch()

  const handleDelete = () => {
    dispatch(todosSlice.actions.removeItem(id))
    const newItems = items.filter(item => item.id !== id)
    window.localStorage.setItem('items', JSON.stringify(newItems))
  }

  const handleSwitchView = () => {
    setEdit(!isEdit)
  }

  const handleEdit = (event) => {
    event.preventDefault()

    const newText = event.target[0].value
    const itemIndex = items.findIndex(item => item.id === id)

    const newItems = [...items]
    newItems[itemIndex] = { id, text: newText, isReady }

    dispatch(todosSlice.actions.replaceItems(newItems))
    window.localStorage.setItem('items', JSON.stringify(newItems))

    handleSwitchView()
  }

  const handleDiscardEdit = () => {
    handleSwitchView()
  }

  const handleToggleReady = () => {
    const itemIndex = items.findIndex(item => item.id === id)

    const newItems = [...items]
    newItems[itemIndex] = { id, text, isReady: !isReady }

    dispatch(todosSlice.actions.replaceItems(newItems))
    window.localStorage.setItem('items', JSON.stringify(newItems))
  }

  return (
    <div className='todo-item'>
      <input
        type='checkbox'
        className='todo-item__check'
        checked={isReady}
        onChange={handleToggleReady}
      />
      {isEdit
        ? (
          <form className='todo-item__edit_form' onSubmit={handleEdit} onReset={handleDiscardEdit}>
            <input className='todo-item__edit_field' type='text' defaultValue={text} />
            <button type='submit'>Save</button>
            <button type='reset'>Discard</button>
          </form>
          )
        : (
          <>
            <div
              className={`todo-item__description ${isReady ? 'striked' : ''}`}
            >
              {text}
            </div>
            <Button
              text='Изменить'
              onClick={handleSwitchView}
              customClass='todo-item__edit'
            />
            <Button
              text='Удалить'
              onClick={handleDelete}
              customClass='todo-item__delete'
            />
          </>
          )}
    </div>
  )
}

export default TodoItem
