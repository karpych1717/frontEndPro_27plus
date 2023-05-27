import React from 'react'

class ErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (e) {
    return { hasError: true }
  }

  componentDidCatch (error, errorInfo) {
    console.log(error, errorInfo)
  }

  render () {
    if (this.state.hasError) {
      return <h1 style={{ textAlighn: 'center', color: 'red', margin: '1em' }}>Error occurred! And here it is!</h1>
    }

    return this.props.children
  }
}

export default ErrorBoundary
