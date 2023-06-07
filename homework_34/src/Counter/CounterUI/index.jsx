import { useDispatch, useSelector } from 'react-redux'

import { counterSlice } from '../store'

import styles from './styles.module.css'

function CounterUI () {
  const dispatch = useDispatch()
  const count = useSelector(store => store.count)

  function handleIncrement () {
    dispatch(counterSlice.actions.increment())
  }

  function handleDecrement () {
    dispatch(counterSlice.actions.decrement())
  }

  return (
    <div className={styles.div}>
      <span className={styles.span}>{count}</span>
      <button className={styles.button} onClick={handleDecrement}>-1</button>
      <button className={styles.button} onClick={handleIncrement}>+1</button>
    </div>
  )
}

export default CounterUI
