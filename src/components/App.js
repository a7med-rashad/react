import React from "react";
import "./App.css";
import Card from "./Card"



const App = () => {
  const boys = [
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
          ];
  const girls = [
          {
            name: "samar",
            age: 27,
            adress: "maadi",
            phone: "0132263783"
            },
          {
            name: "amira",
            age: 22,
            adress: "tamooh",
            phone: "0109055457"
            },
            {
            name: "asmaa",
            age: 20,
            adress: "giza",
            phone: "0102873637"
            },
          ];
  return (
    <div className="mainContainer">
      <h1>Boys Data</h1>
      <Card nameList={boys} color="boys"/>
      <h1>Girls Data</h1>
      <Card nameList={girls} color="girls"/>
    </div>
  )
}

export default App