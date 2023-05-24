
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About'
import Contacts from './pages/Contacts'
import Header from './components/Header'
import ToDoApp from './components/ToDoApp'

function PageRouter () {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ToDoApp />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default PageRouter
