import { Provider } from 'react-redux'
import { Link } from 'react-router-dom'

import ToDoUI from './components/ToDoUI'
import { store } from './store'

function ToDoApp (props) {
  return (
    <Provider store={store}>
      <Link to='/'>Back</Link>
      <ToDoUI />
    </Provider>
  )
}

export default ToDoApp
