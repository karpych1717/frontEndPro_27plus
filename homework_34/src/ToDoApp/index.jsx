import { Provider } from 'react-redux'

import ToDoUI from './components/ToDoUI'
import { store } from './store'

function ToDoApp (props) {
  return (
    <Provider store={store}>
      <ToDoUI />
    </Provider>
  )
}

export default ToDoApp
