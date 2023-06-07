import { useDispatch, useSelector } from 'react-redux'

import { counterSlice } from '../store'

function CounterUI () {
  const dispatch = useDispatch()
  const count = useSelector(store => store.value)
  console.log(count)

  function handleIncrement () {
    dispatch(counterSlice.actions.increment())
  }

  function handleDecrement () {
    dispatch(counterSlice.actions.decrement())
  }

  return (
    <div
      style={{
        color: 'white',
        backgroundColor: 'gray',
        maxWidth: '8rem',
        borderRadius: '1rem',
        padding: '1rem',
        margin: 'auto',
        marginTop: '30%',
        textAlign: 'center',
        fontSize: '5rem'
      }}
    >
      <span style={{ display: 'block', margin: 'auto' }}>{count}</span>
      <button style={{ margin: '0.3rem' }} onClick={handleIncrement}>+1</button>
      <button style={{ margin: '0.3rem' }} onClick={handleDecrement}>-1</button>
    </div>
  )
}

export default CounterUI
