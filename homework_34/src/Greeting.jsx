import { Link } from 'react-router-dom'

function Greeting () {
  return (
    <nav>
      <ul>
        <li><Link to='/counter'>Counter</Link></li>
        <li><Link to='/todoapp'>ToDo App</Link></li>
      </ul>
    </nav>
  )
}

export default Greeting
