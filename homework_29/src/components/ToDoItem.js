import React from 'react'

class ToDoItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = { isEditable: false }

    this.handleRemoveToDo = this.handleRemoveToDo.bind(this)

    this.handleToggleFinished = this.handleToggleFinished.bind(this)
    this.handleToggleEditable = this.handleToggleEditable.bind(this)

    this.handleSaveEdit = this.handleSaveEdit.bind(this)
    this.handleDiscardEdit = this.handleDiscardEdit.bind(this)
  }

  render () {
    if (this.state.isEditable) {
      return (
        <form
          className='toDoItem'
          onSubmit={this.handleSaveEdit}
          onReset={this.handleDiscardEdit}
        >
          <input type='text' defaultValue={this.props.body.task} />
          <button type='submit'>Save</button>
          <button type='reset'>Reset</button>
        </form>
      )
    } else {
      return (
        <div className='toDoItem'>
          <span
            className={this.props.body.isFinished ? 'striked' : ''}
          >
            {this.props.body.task}
          </span>
          <input type='checkbox' onInput={this.handleToggleFinished} />
          <button onClick={this.handleToggleEditable}>Edit</button>
          <button onClick={this.handleRemoveToDo}>Delete</button>
        </div>
      )
    }
  }

  handleRemoveToDo () {
    this.props.removeToDo(this.props.body.id)
  }

  handleToggleFinished () {
    this.props.toggleFinished(this.props.body.id)
  }

  handleToggleEditable () {
    this.setState(prevState => {
      const isEditable = !prevState.isEditable

      return { isEditable }
    })
  }

  handleSaveEdit (event) {
    event.preventDefault()

    const id = this.props.body.id
    const newTask = event.target.elements[0].value.trim()

    this.props.saveEditToDo(id, newTask)

    this.handleToggleEditable()
  }

  handleDiscardEdit () {
    this.handleToggleEditable()
  }
}

export default ToDoItem
