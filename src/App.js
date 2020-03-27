import React, { useState } from "react";
import Header from "./components/layout/Header";
import AddPlayer from "./components/AddPlayer";
import Players from "./components/Players";
import socketIOClient from "socket.io-client";

import "./App.css";

function App() {
  const [players, setPlayers] = useState([
    { id: 1, name: "Marvin"},
    { id: 2, name: "Simon"},
  ]);
  const [playerId, setPlayerId] = useState(players.length + 1);

  const [endpoint, setEndpoint] = useState({
    response: true,
    endpoint: "http://localhost:4001"
  });
  const socket = socketIOClient(endpoint);

  socket.on("FromAPI", data => setEndpoint( data ));
  console.log(socket);

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
      {endpoint.endpoint}
      <AddPlayer addPlayer={addPlayer}/>
      <Players players={players} deletePlayer={deletePlayer} />
    </div>
  );
}

export default App;
