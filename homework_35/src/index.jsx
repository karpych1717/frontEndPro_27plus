import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles.css'
import Greeting from './Greeting'
import ToDoApp from './ToDoApp'
import SWAPI from './SWAPI'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Greeting />} />
        <Route path='/swapi' element={<SWAPI />} />
        <Route path='/todoapp' element={<ToDoApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
