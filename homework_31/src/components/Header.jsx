import { NavLink } from 'react-router-dom'

function Header (props) {
  return (
    <header className='global-header'>
      <ul>
        <li>
          <NavLink to='/'>Main</NavLink>
        </li>
        <li>
          <NavLink to='/contacts'>Contacts</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </header>
  )
}

export default Header
