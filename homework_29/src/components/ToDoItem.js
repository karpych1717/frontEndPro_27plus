import React from 'react'

class ToDoItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditable: false
    }

    this.handleToggleFinished = this.handleToggleFinished.bind(this)
    this.handleToggleEditable = this.handleToggleEditable.bind(this)
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
          <button>Delete</button>
        </div>
      )
    }
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

  handleSaveEdit () {
    return false
  }

  handleDiscardEdit () {
    console.log('uwu')
    this.handleToggleEditable()
  }
}

export default ToDoItem
