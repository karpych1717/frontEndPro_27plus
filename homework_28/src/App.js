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
    this.setState(prevState => {
      const { smiles } = prevState

      let maxVote = 0
      let championIndex = 0

      smiles.forEach((smile, index) => {
        if (smile.votes > maxVote) {
          maxVote = smile.votes
          championIndex = index
        }
      })

      return { championIndex }
    })
  }

  render () {
    const { smiles } = this.state

    return (
      <div className='App'>
        <div className='votes'>
          {smiles.map((smile, index) => (
            <Smile key={index} face={smile.face} onClick={() => this.handleVote(index)} />
          ))}
        </div>

        {this.state.championIndex === null
          ? <button onClick={() => this.finaliseVote()}>Your champion</button>
          : <Smile face={smiles[this.state.championIndex].face} />
        }
      </div>
    )
  }
}

export default App
