import { all, put, call, takeLatest } from 'redux-saga/effects'
import actions from './actions'

import destinationsSlice from './destinationsSlice'
import hotelsSlice from './hotelsSlice'

function * fetchDestinationsWorker (action) {
  const destinations = yield call(() =>
    fetch('http://localhost:3000/destinations')
      .then(response => response.json())
  )

  yield put(destinationsSlice.actions.setItems(destinations))
}

function * fetchHotelsWorker () {
  const hotels = yield call(() =>
    fetch('http://localhost:3000/hotels')
      .then(response => response.json())
  )

  yield put(hotelsSlice.actions.setItems(hotels))
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
