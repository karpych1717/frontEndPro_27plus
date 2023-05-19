import React from 'react'

class ToDoItem extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      isEditable: false,
      isFinished: false
    }

    this.handleToggleFinished = this.handleToggleFinished.bind(this)
    this.handleMakeEditable = this.handleMakeEditable.bind(this)
  }

  render () {
    if (this.state.isEditable) {
      return (
        <form className='toDoItem'>
          <input type='text' value={this.props.body.task} />
          <button type='submit'>Save</button>
          <button type='reset'>Reset</button>
        </form>
      )
    } else {
      return (
        <div className='toDoItem'>
          <span
            className={this.state.isFinished ? 'striked' : ''}
          >
            {this.props.body.task}
          </span>
          <input type='checkbox' onInput={this.handleToggleFinished} />
          <button onClick={this.handleMakeEditable}>Edit</button>
          <button>Delete</button>
        </div>
      )
    }
  }

  handleToggleFinished () {
    this.setState((prevState) => {
      const isFinished = !prevState.isFinished

      return { isFinished }
    })
  }

  handleMakeEditable () {
    this.setState(() => {
      return { isEditable: true }
    })
  }
}

export default ToDoItem
