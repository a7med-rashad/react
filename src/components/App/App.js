import React, { useState } from "react";
import "./App.css";
import Card from "../Card/Card"



const App = () => {
const [cardToggle, setCardToggle] = useState(false)
const [state, setState] = useState ([
    {
      name: "ahmed",
      age: 26,
      adress: "moneeb",
      phone: "0157363783"
      },
    {
      name: "saad",
      age: 27,
      adress: "manial",
      phone: "0157355457"
    },
      {
      name: "amr",
      age: 31,
      adress: "faida",
      phone: "0153550678"
    },
  ]);

  const deleteHandler = (e, clickIdx) => {
    // const deleteOperation = state.filter((e, idx) => idx !== clickIdx)
    // setState(deleteOperation)
    // console.log(state)

    // setState(state.filter((e, idx) => idx !== clickIdx))
    // console.log(state)

    setState((prevState) => {
      return prevState.filter((e, idx) => clickIdx !== idx );
    });
  }

  
  const toggleButton = () => {
    setCardToggle(!cardToggle)
  };

  return (
    <div className="mainContainer">
      <h1>Boys Data</h1>
      <button style={{marginBottom: "20px"}} onClick={toggleButton}>{cardToggle ? "Hide Names" : "Show Names"}</button>
      <div className={cardToggle ? "show" : "hide"}>
      <Card nameList={state} type="boys" deletFunc={deleteHandler}/>
      </div>
    </div>
  )
}

export default App