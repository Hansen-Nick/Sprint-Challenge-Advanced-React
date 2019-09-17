import React, { Component } from 'react'

class PlayerCard extends Component {
  render(){
    return(
      <div className='cardDivs'>
        <h1>{this.props.player.id + 1}</h1>
        <h2>{this.props.player.name}, {this.props.player.country}</h2>
        <p>{this.props.player.searches}</p>
      </div>
    )
  }
}

export default PlayerCard