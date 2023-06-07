
import { Provider } from 'react-redux'

import CounterUI from './CounterUI'
import { store } from './store'

function Counter () {
  return (
    <Provider store={store}>
      <CounterUI />
    </Provider>
  )
}

export default Counter
