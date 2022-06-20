import React, { useState } from "react";
import "./App.css";
import Card from "../Card/Card"



const App = () => {
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
  ])
  return (
    <div className="mainContainer">
      <h1>Boys Data</h1>
      <Card nameList={state} type="boys"/>
    </div>
  )
}

export default App