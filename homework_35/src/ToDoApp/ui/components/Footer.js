// Core
import { useSelector, useDispatch } from 'react-redux'
// Parts
import Button from './form/Button'
// Engine
import todosSlice from '../../../storage/todosSlice'

export function Footer () {
  const length = useSelector(state => state.todos.items.length)
  const dispatch = useDispatch()

  const clearValue = () => {
    dispatch(todosSlice.actions.replaceItems([]))
    window.localStorage.setItem('items', JSON.stringify([]))
  }
  return (
    <footer>
      length: {length}
      <br />
      <Button onClick={clearValue} text='Clear' />
    </footer>
  )
}
