import React from 'react'
import { ThemeProvider } from 'react-jss'
import StyledButton from './StyledButton'

const theme = {
  colors: {
    primary: 'blue',
    secondary: 'green'
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <StyledButton />
      </div>
    </ThemeProvider>
  )
}

export default App
