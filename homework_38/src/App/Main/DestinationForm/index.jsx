import { Field, Form } from 'react-final-form'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import Button from './Button'
import DestinationInput from './DestinationInput'
import { Grid, TextField } from '@mui/material'

function DestinationForm () {
  return (
    <Form
      onSubmit={() => console.log('submit')}
      render={({ handleSubmit }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <form onSubmit={handleSubmit}>
            <Grid container direction='column' alignItems='center' justifyContent='center'>
              <Field name='destination' component={DestinationInput} />

              <Field name='checkIn' component={DatePicker} sx={{ width: 300, margin: '0.2rem' }} />
              <Field name='checkOut' component={DatePicker} sx={{ width: 300, margin: '0.1rem' }} />

              <Field name='adults' component={TextField} sx={{ width: 300, margin: '0.1rem' }} />
              <Field name='children' component={TextField} sx={{ width: 300, margin: '0.1rem' }} />
              <Button />
            </Grid>
          </form>
        </LocalizationProvider>
      )}
    />
  )
}

export default DestinationForm
