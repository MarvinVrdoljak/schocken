import React, {useState} from "react";

function PlayerDices(state) {
  //const [dices, setDices] = useState(state.dices);

  function selectDice(id) {
    const dices = state.dices.map(dice => {
        if (dice.id === id) {
          dice.selected = !dice.selected;
        }
        return dice;
      })

    state.updatePlayerDices(state.id, dices);
  }

  function showHideDices(){
    const dices = state.dices.map(dice => {
        if (dice.selected !== true) {
          dice.visible = !dice.visible;
        }
        return dice;
      })
      state.updatePlayerDices(state.id, dices);
  }

 function changeDices(){
  let dices = state.dices.map(dice => {
      if (dice.selected !== true) {
        dice.visible = false;
      }
      if (!dice.selected){
        dice.value = Math.floor(Math.random() * 5) + 1;
      }
      return dice;
    })

    state.updatePlayerDices(state.id, dices);
 }


const getDices = state.dices.map((dice, index) => {
  return (
      <div className={"dice" + (dice.selected ? ' dice--selected' : '') + (dice.visible ? ' dice--visible' : ' dice--hidden')} key={index} onClick={selectDice.bind(this, dice.id)}>
        {dice.value}
      </div>
  );
})


  return (
    <div className="dices">
      {getDices}
      <a href="{#}" className="button" onClick={changeDices}>Würfeln</a>
      <a href="{#}" className="button" onClick={showHideDices}>Aufdecken/Verdecken</a>
    </div>
  )
}

export default PlayerDices;

