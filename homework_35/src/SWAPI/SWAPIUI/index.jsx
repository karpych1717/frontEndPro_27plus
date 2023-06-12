import Form from './Form'
import Card from './Card'

import { useSelector, Provider } from 'react-redux'
import store from '../../storage/store'

function SWAPIUI () {
  const isFull = useSelector(store => store.swapi.isFull)

  return (
    <Provider store={store}>
      <h1>SWAPI</h1>
      <hr />
      <Form />
      {isFull ? <Card /> : null}
    </Provider>
  )
}

export default SWAPIUI
