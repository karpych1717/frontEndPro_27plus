import { useSelector } from 'react-redux'

function Fooooter () {
  const toDoAmount = useSelector(store => store.todos.length)
  return (
    <div style={{ textAlign: 'center' }}>
      <span>The number is: {toDoAmount}</span>
    </div>
  )
}

export default Fooooter
