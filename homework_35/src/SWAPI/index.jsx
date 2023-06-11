
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom'

import SWAPIUI from './SWAPIUI'
import { store } from './store'

function SWAPI () {
  return (
    <Provider store={store}>
      <Link to='/'>Back</Link>
      <SWAPIUI />
    </Provider>
  )
}

export default SWAPI
