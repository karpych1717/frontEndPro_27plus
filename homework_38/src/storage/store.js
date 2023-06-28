import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import todosSlice from './todosSlice'
import rootSaga from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: todosSlice.reducer,
  middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export default store
