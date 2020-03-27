import React from 'react';
import PlayerDices from './PlayerDices';

function PlayerItem(state) {
  const {id, name} = state.player;

  return (
    <div className={"player"}>
      <h2>{name}</h2>
      <PlayerDices />
      <a className="delete" href="#/" onClick={state.deletePlayer.bind(this, id)}>X</a>
    </div>
  )
}

export default PlayerItem;

