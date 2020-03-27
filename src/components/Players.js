import React from 'react';
import PlayerItem from './PlayerItem';

function Players(state) {
  return state.players.map((player, index) => (
    <div key={index}>
      <PlayerItem  player={player} deletePlayer={state.deletePlayer}/>
    </div>
  ));
}

export default Players;
