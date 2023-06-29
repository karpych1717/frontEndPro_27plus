import { Field, Form } from 'react-final-form'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import Button from './Button'
import DestinationInput from './DestinationInput'
import { Grid, TextField } from '@mui/material'

function DestinationForm () {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit}>
            <Grid container direction='column' alignItems='center' justifyContent='center'>
              <Field name='destination' component={DestinationInput} />

              <Field name='checkIn'>
                {({ input }) => <DatePicker {...input} sx={{ width: 300, margin: '0.1rem' }} />}
              </Field>
              <Field name='checkOut'>
                {({ input }) => <DatePicker {...input} sx={{ width: 300, margin: '0.1rem' }} />}
              </Field>

              <Field name='adults'>
                {({ input }) => <TextField {...input} sx={{ width: 300, margin: '0.1rem' }} />}
              </Field>
              <Field name='children'>
                {({ input }) => <TextField {...input} sx={{ width: 300, margin: '0.1rem' }} />}
              </Field>

              <Button />
            </Grid>
          </form>
        )}
      />
    </LocalizationProvider>
  )
}

function onSubmit (values, form) {
  console.log('submit')
  console.log(values)
  console.log(form)
  console.log('=======')
}

export default DestinationForm
