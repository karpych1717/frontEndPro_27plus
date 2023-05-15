import React from 'react'

class Main extends React.Component {
  render () {
    return (
      <div className='canvasWrapper'>
        <canvas ref={(ref) => (this.canvas = ref)} />
      </div>
    )
  }

  componentDidMount () {
    const cvs = this.canvas
    const ctx = cvs.getContext('2d')

    cvs.width = 500
    cvs.height = 500

    cvs.addEventListener('pointermove', (event) => {
      randomColorRect(event.offsetX, event.offsetY, ctx)
    })
  }
}

function random255 () {
  return 100 + Math.trunc(156 * Math.random())
}

function randomColorRect (x, y, ctx) {
  ctx.fillStyle = `rgb(${random255()}, ${random255()}, ${random255()})`

  ctx.fillRect(x - 3, y - 3, 5, 5)
}

export default Main
