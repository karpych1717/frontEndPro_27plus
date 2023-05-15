import React from 'react'

import logo from '../files/logo.png'

class Header extends React.Component {
  render () {
    return (
      <div className='header'>
        <span className='headerSpan'>Header O_o</span>
        <img src={logo} alt='cat logo' width='40px' />
      </div>
    )
  }
}

export default Header
