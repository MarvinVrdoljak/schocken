import React, { useState, useEffect } from "react";
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

  const [response, setResponse] = useState(false);
  const [endpoint] = useState("https://jsonplaceholder.typicode.com/todos/1");
  // const [endpoint, setEndpoint] = useState({
  //   response: false,
  //   endpoint: "https://jsonplaceholder.typicode.com/todos/1"
  // });
  const socket = socketIOClient(endpoint);

  useEffect(() => {
    socket.on("FromAPI", data => setResponse({data}));
  });


  function deletePlayer(id) {
    setPlayers([...players.filter(player => player.id !== id)]);
  }

  function addPlayer(name) {
    setPlayers([...players, {id: playerId, name}]);
    setPlayerId(playerId + 1);
  }

  console.log( {response})

  return (

    <div className="App">
      <Header />

      <AddPlayer addPlayer={addPlayer}/>
      <Players players={players} deletePlayer={deletePlayer} />
    </div>
  );
}

export default App;
