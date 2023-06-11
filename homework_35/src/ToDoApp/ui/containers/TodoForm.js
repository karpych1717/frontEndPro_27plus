import React from 'react'
import '../../main.css'
// Parts
import Input from '../components/form/Input'
import Button from '../components/form/Button'
import { todosActions, todosSelectors } from '../../engine/core/todos/slice'
import { useDispatch, useSelector } from 'react-redux'

function TodoForm () {
  const items = useSelector(todosSelectors.items)
  const dispatch = useDispatch()

  const handleAdd = (event) => {
    event.preventDefault()
    const input = event.target.getElementsByClassName('form__input')[0]
    const text = input.value
    const newItems = [
      ...items,
      { id: Math.random(), text, isReady: false }
    ]

    dispatch(todosActions.replaceItems(newItems))
    window.localStorage.setItem('items', JSON.stringify(newItems))
    input.value = ''
  }
  return (
    <form
      className='form'
      onSubmit={handleAdd}
    >
      <Input />
      <Button text='Отправить' />
    </form>
  )
}

export default TodoForm
