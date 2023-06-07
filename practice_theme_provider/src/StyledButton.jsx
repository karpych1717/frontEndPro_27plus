import React from 'react'
import { createUseStyles, useTheme } from 'react-jss'

const useStyles = createUseStyles((theme) => ({
  button: {
    background: theme.colors.primary,
    color: theme.colors.secondary
    // other styles...
  }
}))

const StyledButton = () => {
  const theme = useTheme() // Access the theme using useTheme hook
  const classes = useStyles(theme)
  return <button className={classes.button}>Styled Button</button>
}

export default StyledButton
