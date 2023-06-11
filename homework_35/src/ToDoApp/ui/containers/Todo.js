// Core
import { useDispatch, useSelector } from 'react-redux'
// Parts
import Header from '../components/Header'
import TodoItem from '../components/TodoItem'
import TodoForm from './TodoForm'
// Engine
import { todosActions, todosSelectors } from '../../engine/core/todos/slice'
import { useEffect } from 'react'
import { Footer } from '../components/Footer'

export default function Todo () {
  const items = useSelector(todosSelectors.items)
  const dispatch = useDispatch()

  useEffect(
    () => {
      const fetchItems = JSON.parse(window.localStorage.getItem('items')) || []
      dispatch(todosActions.replaceItems(fetchItems))
    },
    []
  )

  return (
    <div className='container'>
      <Header />
      <TodoForm />
      <div>
        {items.map(item => (
          <TodoItem
            key={item.id}
            text={item.text}
            id={item.id}
            isReady={item.isReady}
          />
        ))}
      </div>
      <Footer />
    </div>
  )
}
