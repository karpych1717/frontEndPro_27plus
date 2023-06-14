import React from 'react'
import ReactDOM from 'react-dom/client'

import './styles.css'
import ToDoApp from './ToDoApp/'

import { Provider } from 'react-redux'
import store from './storage/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToDoApp />
    </Provider>
  </React.StrictMode>
)
