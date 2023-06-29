import { all, put, call, takeLatest } from 'redux-saga/effects'
import actions from './actions'
import { api } from '../API/axios'

import destinationsSlice from './destinationsSlice'
import hotelsSlice from './hotelsSlice'

import { push } from 'redux-first-history'

function * fetchDestinationsWorker () {
  const { data } = yield call(api.getDestinations)

  yield put(destinationsSlice.actions.setItems(data))
}

function * fetchHotelsWorker (action) {
  console.log('input:', action.payload)

  const { data } = yield call(api.getHotels)

  yield put(hotelsSlice.actions.setItems(data))

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
