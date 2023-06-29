import './index.css'
import Layout from './Layout'
import Main from './Main'
import Hotels from './Hotels'
import About from './About'

import { history } from '../storage/store'

import { Routes, Route } from 'react-router-dom'
import { HistoryRouter } from 'redux-first-history/rr6'

function App () {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/hotels' element={<Hotels />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </HistoryRouter>
  )
}

export default App
