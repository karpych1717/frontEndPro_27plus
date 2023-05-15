import Header from './components/Header.js'
import Nav from './components/Nav.js'
import Main from './components/Main.js'

import './index.css'

function App () {
  return (
    <>
      <Header />
      <div className='container'>
        <Nav />
        <Main />
      </div>
    </>
  )
}

export default App
