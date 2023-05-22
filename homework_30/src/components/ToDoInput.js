import React from 'react'

class ToDoInput extends React.Component {
  render () {
    return (
      <form
        className='toDoInput'
        onSubmit={(event) => {
          event.preventDefault()

          const _input = event.target.elements[0]
          const newTask = _input.value.trim()
          _input.value = ''

          this.props.addToDo(newTask)
        }}
      >
        <input type='text' placeholder='task' required />
        <button type='submit'>Add</button>
        <button type='reset'>Reset</button>
      </form>
    )
  }
}

export default ToDoInput
