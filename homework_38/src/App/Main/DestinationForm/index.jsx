import { Field, Form } from 'react-final-form'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import MyButton from './Button'
import DestinationInput from './DestinationInput'
import { Grid, TextField } from '@mui/material'
import actions from '../../../storage/actions'
import { useDispatch } from 'react-redux'

function DestinationForm () {
  const dispatch = useDispatch()

  function onSubmit (values, form) {
    dispatch(actions.fetchHotels(values))
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form }) => (
          <form onSubmit={handleSubmit}>
            <Grid container direction='column' alignItems='center' justifyContent='center'>
              <Field name='destination' validate={required} component={DestinationInput} />

              <Field name='checkIn' validate={required}>
                {({ input }) => <DatePicker {...input} sx={{ width: 300, margin: '0.1rem' }} />}
              </Field>
              <Field name='checkOut' validate={required}>
                {({ input }) => <DatePicker {...input} sx={{ width: 300, margin: '0.1rem' }} />}
              </Field>

              <Field name='adults' validate={positive}>
                {({ input }) => <TextField {...input} sx={{ width: 300, margin: '0.1rem' }} />}
              </Field>
              <Field name='children' validate={nonNegative}>
                {({ input }) => <TextField {...input} sx={{ width: 300, margin: '0.1rem' }} />}
              </Field>

              <MyButton />
            </Grid>
          </form>
        )}
      />
    </LocalizationProvider>
  )
}

function required (value) {
  return value ? undefined : 'Required'
}
function nonNegative (value) {
  return !isNaN(value) && value >= 0
    ? undefined
    : 'Should be greater or equal than 0'
}
function positive (value) {
  return !isNaN(value) && value > 0
    ? undefined
    : 'Should be greater than 0'
}

export default DestinationForm
