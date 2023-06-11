// Core
import { Provider } from 'react-redux'
import { Link } from 'react-router-dom'
// Parts
import Todo from '../containers/Todo'
// Engine
import { store } from '../../engine/init/store'
// Helpers
import '../../main.css'

function Main () {
  return (
    <Provider store={store}>
      <Link to='/'>Back</Link>
      <Todo />
    </Provider>
  )
}

export default Main
