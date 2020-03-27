import React, { useState } from "react";

function PlayerDices(state) {

  const [dices, setDices] = useState([
    { id: 1, number: 6, selected:false, visible: true},
    { id: 2, number: 6, selected:false, visible: true},
    { id: 3, number: 6, selected:false, visible: true},
  ]);


  function selectDice(id) {
    setDices(
      dices.map(dice => {
        if (dice.id === id) {
          dice.selected = !dice.selected;
        }
        return dice;
      })
    );
  }

  const getDices = dices.map((dice, index) => {
    return (
      <div className={"dice" + (dice.selected ? ' dice--selected' : '') + (dice.visible ? ' dice--visible' : ' dice--hidden')} key={index} onClick={selectDice.bind(this, dice.id)}>
        {dice.number}
      </div>
      )
  })

  function showHideDices(){
    setDices(
      dices.map(dice => {
        if (dice.selected !== true) {
          dice.visible = !dice.visible;
        }
        return dice;
      })
    );
  }

 function changeDices(){

  setDices(
    dices.map(dice => {
      if (dice.selected !== true) {
        dice.visible = false;
      }
      return dice;
    })
  );

   setDices(
    dices.map(dice => {
      if (!dice.selected){
        dice.number = Math.floor(Math.random() * 5) + 1;
      }
      return dice;
    })
  );
 }



  return (
    <div className="dices">
      {getDices}
      <a href="{#}" className="button" onClick={changeDices}>Würfeln</a>
      <a href="{#}" className="button" onClick={showHideDices}>Aufdecken/Verdecken</a>
    </div>
  )
}

export default PlayerDices;

