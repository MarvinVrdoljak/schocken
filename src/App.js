import React, { useState, useEffect } from "react";
import Header from "./components/layout/Header";
import AddPlayer from "./components/AddPlayer";
import Players from "./components/Players";
import socketIOClient from "socket.io-client";
import PlayerDices from "./components/PlayerDices";

import "./App.css";

function App() {
  const [players, setPlayers] = useState([
    { id: 1,
      name: "Marvin", dices: [
        {id: 1, value: 1, selected: false, visible: true},
        {id: 2, value: 2, selected: false, visible: true},
        {id: 3, value: 3, selected: false, visible: true},
      ]
    },
    { id: 2,
      name: "Fluffy", dices: [
        {id: 1, value: 1, selected: false, visible: true},
        {id: 2, value: 2, selected: false, visible: true},
        {id: 3, value: 3, selected: false, visible: true},
      ]
    },
  ]);

  const [playerId, setPlayerId] = useState(players.length + 1);

  const [response, setResponse] = useState(false);
  const [endpoint] = useState("http://env-0915955.hidora.com");

  const socket = socketIOClient(endpoint);

  useEffect(() =>{
    console.log(players);
        socket.emit("roll", players);
  })

  socket.on("roll", data => {
    console.log(data);
  })


  function updatePlayerDices(id, dices){

    console.log(dices);
    setPlayers(
      players.map(player => {
        if (player.id == id) {
          player.dices = dices;
        }
        return player;
      })
    )
  }


  function deletePlayer(id) {
    setPlayers([...players.filter(player => player.id !== id)]);
  }

  function addPlayer(name) {
    setPlayers([...players, {id: playerId, name, dices: [
      {id: 1, value: 1, selected: false, visible: true},
      {id: 2, value: 2, selected: false, visible: true},
      {id: 3, value: 3, selected: false, visible: true},
    ]}]);
    setPlayerId(playerId + 1);
  }

  return (
    <div className="App">
      <Header />
      <AddPlayer addPlayer={addPlayer}/>
      <Players players={players} updatePlayerDices={updatePlayerDices} deletePlayer={deletePlayer}/>
    </div>
  );
}

export default App;
