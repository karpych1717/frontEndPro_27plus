import React from 'react'
import Smile from './Smile'

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      smiles: [
        { face: '😊', votes: 0 },
        { face: '🐸', votes: 0 },
        { face: '🐧', votes: 0 },
        { face: '💀', votes: 0 },
        { face: '🐵', votes: 0 }
      ],
      championIndex: null
    }
  }

  handleVote (smileIndex) {
    this.setState(prevState => {
      const newSmiles = prevState.smiles.map((smile, index) => {
        if (index === smileIndex) {
          return { face: smile.face, votes: smile.votes + 1 }
        } else {
          return { face: smile.face, votes: smile.votes }
        }
      })

      return { smiles: newSmiles }
    })
  }

  finaliseVote () {
    const { smiles } = this.state

    let maxVote = 0
    let championIndex = 0

    smiles.forEach((smile, index) => {
      if (smile.votes > maxVote) {
        maxVote = smile.votes
        championIndex = index
      }
    })

    if (maxVote === 0) {
      window.alert('vote please')
      return
    }

    this.setState({ championIndex })
  }

  render () {
    const { smiles } = this.state

    return (
      <div className='App'>
        <div className='votes'>
          {smiles.map((smile, index) => (
            <Smile
              className='smile smallSmile activeSmile'
              key={index}
              smile={smile}
              onClick={() => this.handleVote(index)}
            />
          ))}
        </div>

        {this.state.championIndex === null
          ? <button onClick={() => this.finaliseVote()}>Your champion</button>
          : <Smile
              className='smile bigSmile'
              smile={smiles[this.state.championIndex]}
            />}
      </div>
    )
  }
}

export default App
