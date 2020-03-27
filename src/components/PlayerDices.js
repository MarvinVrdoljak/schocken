import React, {useState} from "react";

function PlayerDices(state) {

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
        if (dice.selected === true && dice.visible === false) {
          dice.visible = true;
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
      <button className="button" onClick={changeDices}>Würfeln</button>
      <button className="button" onClick={showHideDices}>Aufdecken/Verdecken</button>
    </div>
  )
}

export default PlayerDices;

