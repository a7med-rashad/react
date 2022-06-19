import React from "react";
import "./App.css";

const App = () => {
  const names = [
          {
            name: "ahmed",
            age: 26,
            adress: "moneeb",
            phone: "0157363783"
            },
           {
             name: "amira",
            age: 27,
            adress: "manial",
            phone: "0157355457"
           },
            {
             name: "amr",
            age: 31,
            adress: "faida",
            phone: "015355678"
           },
          ];
         const cards =  names.map((el, idx) => {
             <div className="cardWrapper" key={idx}>
               <div>Name: Kareem</div>
               <div>Age: 26</div>
               <div>Phone: 010107363673</div>
               <div>Adress: moneeb</div>
             </div>
         });
  return (
    <div className="mainContainer">
      {cards}
    </div>
  )
}

export default App