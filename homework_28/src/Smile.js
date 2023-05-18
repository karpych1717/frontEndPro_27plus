import React from 'react'

class Smile extends React.Component {
  render () {
    const { smile } = this.props

    return (
      <span
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {smile.face} {smile.votes}
      </span>
    )
  }
}

export default Smile
