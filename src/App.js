import React, { useState } from "react";
import Header from "./components/layout/Header";
import AddPlayer from "./components/AddPlayer";
import Players from "./components/Players";

import "./App.css";

function App() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Marvin"},
    { id: 2, name: "Simon"},

  ]);
  const [playerId, setPlayerId] = useState(players.length + 1);

  function deletePlayer(id) {
    setPlayers([...players.filter(player => player.id !== id)]);
  }

  function addPlayer(name) {
    setPlayers([...players, {id: playerId, name}]);
    setPlayerId(playerId + 1);
  }

  return (

    <div className="App">
      <Header />
      <AddPlayer addPlayer={addPlayer}/>
      <Players players={players} deletePlayer={deletePlayer} />
    </div>
  );
}

export default App;
