import { Form, Field } from 'react-final-form'

import styles from './styles.module.css'

function ToDoForm (props) {
  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit, form }) => (
        <form
          className={styles.toDoForm}
          onSubmit={handleSubmit}
        >
          <Field
            name='input'
            component='input'
            type='text'
            placeholder='task'
            validate={length}
            className={
              `${styles.mainInput} ${
                form.getState().errors.input === 'to short'
                ? [styles.invalidField]
                : ''
              }`
            }
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
  if (value === undefined) return 'no input'
  if (value.trim().length < 5) return 'to short'

  return undefined
}

export default ToDoForm
