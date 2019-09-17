import React, { Component } from 'react';
import PlayerCard from './PlayerCard';
import axios from 'axios'


class PlayerList extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players')
      .then(res => this.setState({players: res.data}))
      .catch(err => console.log(err))
  }

  render() {
    return(
      <div>
        {this.state.players.map( (player, index) => <PlayerCard key={index} player={player}/>
        )}
      </div>
    )
  }
}

export default PlayerList