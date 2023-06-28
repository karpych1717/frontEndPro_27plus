import { Link } from 'react-router-dom'

function Header () {
  return (
    <nav style={{ display: 'flexbox' }}>
      <Link to='/' style={{ flex: 1 }}>Main</Link>
      <Link to='/hotels'>Hotels</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}

export default Header
