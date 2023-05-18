import React from 'react'

class Smile extends React.Component {
  render () {
    const { face } = this.props

    return (
      <span
        className={this.props.className}
        onClick={this.props.onClick}
      >
        {face}
      </span>
    )
  }
}

export default Smile
