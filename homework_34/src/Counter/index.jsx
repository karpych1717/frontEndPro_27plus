
import { Provider } from 'react-redux'

import CounterUI from './CounterUI'
import { store } from './store'

function Counter () {
  console.log(store)
  return (
    <Provider store={store}>
      <CounterUI />
    </Provider>
  )
}

export default Counter
