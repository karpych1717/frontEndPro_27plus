import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './styles.css'
import Greeting from './Greeting'
import ToDoApp from './ToDoApp'
import Counter from './Counter'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Greeting />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/todoapp' element={<ToDoApp />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
