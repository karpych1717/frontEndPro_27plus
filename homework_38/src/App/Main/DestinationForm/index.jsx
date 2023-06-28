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
            <Grid container spacing={1} direction='column' alignItems='center' justifyContent='center'>
              <Grid item xs={12}>
                <Field name='destination' component={DestinationInput} />
              </Grid>
              <Grid item xs={12}>
                <Field name='checkIn' component={DatePicker} />
              </Grid>
              <Grid item xs={12}>
                <Field name='checkOut' component={DatePicker} />
              </Grid>
              <Grid item xs={12}>
                <Field name='adults' component={TextField} />
              </Grid>
              <Grid item xs={12}>
                <Field name='children' component={TextField} />
              </Grid>
              <Grid item xs={12}>
                <Button />
              </Grid>
            </Grid>
          </form>
        </LocalizationProvider>
      )}
    />
  )
}

export default DestinationForm
