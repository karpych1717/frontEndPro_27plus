import { Link } from 'react-router-dom'
import Todo from '../containers/Todo'

import '../../main.css'

function Main () {
  return (
    <>
      <Link to='/'>Back</Link>
      <Todo />
    </>
  )
}

export default Main
