import { Button } from '@mui/material'
function MyButton () {
  return (
    <Button
      type='submit'
      variant='outlined'
      sx={{ width: 300, margin: '0.1rem' }}
    >
      Submit
    </Button>
  )
}

export default MyButton
