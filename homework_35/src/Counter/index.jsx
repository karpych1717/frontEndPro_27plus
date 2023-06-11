
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom'

import CounterUI from './CounterUI'
import { store } from './store'

function Counter () {
  return (
    <Provider store={store}>
      <Link to='/'>Back</Link>
      <CounterUI />
    </Provider>
  )
}

export default Counter
