import { useDispatch } from 'react-redux'
import ToDoForm from './components/ToDoForm/'
import ToDoList from './components/ToDoList/'
import Footer from './components/Footer'

import styles from './styles.module.css'
import { useEffect } from 'react'

import { createAction } from '@reduxjs/toolkit'

function ToDoApp (props) {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(createAction('FETCH_TODOS')())
  })

  return (
    <div className={styles.toDoApp}>
      <header><h1>ToDo</h1></header>

      <ToDoForm />
      <ToDoList />
      <Footer />
    </div>
  )
}

export default ToDoApp
