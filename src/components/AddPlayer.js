import React, { useState } from 'react';

function AddPlayer(state) {
const [newPlayer, setNewPlayer] = useState('');

function onChange(e){
  setNewPlayer(e.target.value);
}

function onSubmit(e){
  e.preventDefault();
  if (newPlayer === ''){
    alert('Spielernamen eingeben');
  }
  else{
    state.addPlayer(newPlayer);
    setNewPlayer('');
  }
}

  return (
    <div className="">
      <form onSubmit={onSubmit} className="addPlayer">
        <input type="text" name="title" placholder="Spieler hinzufügen" value={newPlayer} onChange={onChange}/>
        <input className="button" type="submit" value="Spieler hinzufügen"/>
      </form>
    </div>
    )
}

export default AddPlayer;