import { Form, Field } from 'react-final-form'
import TextField from '@mui/material/TextField'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

function TestForm () {
  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Field name='firstName'>
            {({ input }) => (
              <TextField
                {...input}
                label='First Name'
                variant='outlined'
              />
            )}
          </Field>

          <Field name='dateOfBirth'>
            {({ input }) => (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  {...input}
                  label='Date of Birth'
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            )}
          </Field>

          <Field name='gender'>
            {({ input }) => (
              <Select
                {...input}
                label='Gender'
                variant='outlined'
              >
                <MenuItem value='male'>Male</MenuItem>
                <MenuItem value='female'>Female</MenuItem>
                <MenuItem value='other'>Other</MenuItem>
              </Select>
            )}
          </Field>

          <button type='submit'>Submit</button>
        </form>
      )}
    />

  )
}

function handleSubmit (values) {
  console.log(values)
  // Perform any further actions with the form values
}

export default TestForm
