import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import destinationsSlice from './destinationsSlice'
import hotelsSlice from './hotelsSlice'

import rootSaga from './rootSaga'

import { createReduxHistoryContext } from 'redux-first-history'
import { createBrowserHistory } from 'history'

const sagaMiddleware = createSagaMiddleware()

const { createReduxHistory, routerMiddleware, routerReducer } =
  createReduxHistoryContext({
    history: createBrowserHistory()
  })

const combinedReducer = combineReducers({
  destinations: destinationsSlice.reducer,
  hotels: hotelsSlice.reducer,
  router: routerReducer
})

const store = configureStore({
  reducer: combinedReducer,
  middleware: () => [sagaMiddleware, routerMiddleware]
})

const history = createReduxHistory(store)
sagaMiddleware.run(rootSaga)

export { history }
export default store
