import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import PageRouter from './PageRouter'
import ErrorBoundary from './components/ErrorBoundary'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <PageRouter />
    </ErrorBoundary>
  </React.StrictMode>
)
