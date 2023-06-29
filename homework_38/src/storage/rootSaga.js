import { all, put, call, takeLatest } from 'redux-saga/effects'
import actions from './actions'

import destinationsSlice from './destinationsSlice'
import hotelsSlice from './hotelsSlice'

import { push } from 'redux-first-history'

function * fetchDestinationsWorker () {
  const destinations = yield call(() =>
    fetch('http://localhost:3000/destinations')
      .then(response => response.json())
  )

  yield put(destinationsSlice.actions.setItems(destinations))
}

function * fetchHotelsWorker (action) {
  console.log(action.payload)

  const hotels = yield call(() =>
    fetch('http://localhost:3000/hotels')
      .then(response => response.json())
  )

  yield put(hotelsSlice.actions.setItems(hotels))

  yield put(push('/hotels'))
}

function * watcher () {
  yield takeLatest(actions.fetchDestinations.type, fetchDestinationsWorker)
  yield takeLatest(actions.fetchHotels.type, fetchHotelsWorker)
}

function * rootSaga () {
  yield all([
    call(watcher)
  ])
}

export default rootSaga
