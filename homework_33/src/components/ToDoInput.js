import { Form, Field } from 'react-final-form'

function ToDoInput (props) {
  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit, form }) => (
        <form
          className='toDoInput'
          onSubmit={handleSubmit}
        >
          <Field
            name='input'
            component='input'
            type='text'
            placeholder='task'
            validate={length}
            className={!form.getState().valid && form.getState().values.input ? 'invalid-field' : ''}
          />
          <button type='submit' disabled={!form.getState().valid}>Add</button>
          <button type='reset' onClick={() => form.reset()}>Reset</button>
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
