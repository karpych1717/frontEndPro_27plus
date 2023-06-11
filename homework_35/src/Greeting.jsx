import { Link } from 'react-router-dom'

import './styles.css'

function Greeting () {
  return (
    <nav>
      <ul>
        <li><Link to='/swapi'>SWAPI</Link></li>
        <li><Link to='/todoapp'>ToDo App</Link></li>
      </ul>
    </nav>
  )
}

export default Greeting
