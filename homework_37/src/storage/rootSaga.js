import { all, put, select, call, takeEvery } from 'redux-saga/effects'
import { createAction } from '@reduxjs/toolkit'
import todosSlice from './todosSlice'

const todosActions = Object.freeze({
  todosFetch: createAction('FETCH_TODOS'),
  addItem: createAction('ADD_ITEM'),
  removeItem: createAction('REMOVE_ITEM'),
  editItem: createAction('EDIT_ITEM'),
  clearAll: createAction('CLEAR_ALL')
})

function * backUp () {
  const todos = yield select((state) => state.todos)

  window.localStorage.setItem('todos', JSON.stringify(todos))
}

function * fetchTodosWorker () {
  const response = yield call(() => JSON.parse(window.localStorage.getItem('todos')) || [])

  yield put(todosSlice.actions.replaceItems(response))
}

function * addItem (action) {
  const newItem = {
    id: Math.ceil(Number.MAX_SAFE_INTEGER * Math.random()),
    body: action.payload,
    isFinished: false
  }

  yield put(todosSlice.actions.addItem(newItem))
  yield * backUp()
}

function * removeItem (action) {
  yield put(todosSlice.actions.removeItem(action.payload))
  yield * backUp()
}

function * editItem (action) {
  yield put(todosSlice.actions.editItem(action.payload))
  yield * backUp()
}

function * clearAll () {
  yield put(todosSlice.actions.replaceItems([]))
  yield * backUp()
}

function * todosWatcher () {
  yield takeEvery(todosActions.todosFetch.type, fetchTodosWorker)
  yield takeEvery(todosActions.addItem.type, addItem)
  yield takeEvery(todosActions.removeItem.type, removeItem)
  yield takeEvery(todosActions.editItem.type, editItem)
  yield takeEvery(todosActions.clearAll.type, clearAll)
}

function * rootSaga () {
  yield all([
    call(todosWatcher)
  ])
}

export default rootSaga
