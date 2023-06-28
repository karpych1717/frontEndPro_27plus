import { Link } from 'react-router-dom'

function Header () {
  return (
    <nav style={{ margin: '1rem', padding: '1rem', backgroundColor: 'LightGray' }}>
      <Link to='/' style={{ margin: '1rem' }}>Main</Link>
      <Link to='/about'>About</Link>
    </nav>
  )
}

export default Header
