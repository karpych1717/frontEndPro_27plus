import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import destinationsSlice from './destinationsSlice'
import hotelsSlice from './hotelsSlice'

import rootSaga from './rootSaga'
import actions from './actions'

const combinedReducer = combineReducers({
  destinations: destinationsSlice.reducer,
  hotels: hotelsSlice.reducer
})

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: combinedReducer,
  middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

store.dispatch(actions.fetchDestinations('uwu'))
store.dispatch(actions.fetchHotels('hhhhh'))

console.log(store.getState())

export default store
