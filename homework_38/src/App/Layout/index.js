import { Container } from '@mui/system'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function Layout () {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  )
}

export default Layout
