import { Form, Field } from 'react-final-form'
import useStyles from '../styles.jss.js'

function ToDoInput (props) {
  const classes = useStyles(props)

  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit, form }) => (
        <form
          className={classes.toDoForm}
          onSubmit={handleSubmit}
        >
          <Field
            name='input'
            component='input'
            type='text'
            placeholder='task'
            validate={length}
            className={
              `${classes.mainInput} ${
                !form.getState().valid && form.getState().values.input
                ? [classes.invalidField]
                : ''
              }`
            }
          />
          <button type='submit' className={classes.inputButton} disabled={!form.getState().valid}>Add</button>
          <button type='reset' className={classes.inputButton} onClick={() => form.reset()}>Reset</button>
        </form>

      )}
    />
  )

  function handleSubmit (values, form) {
    props.addToDo(values.input)
    form.reset()
  }
}

function length (value) {
  if (value === undefined) return 'to short'

  console.log(value.length)
  return value.length < 5 ? 'to short' : undefined
}

export default ToDoInput
