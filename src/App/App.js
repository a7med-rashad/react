import React, { useState } from "react";  
import stylee from "./App.module.css"; 
import CardList from "../components/CardList/CardList" 
import Filter from "../components/Filter/Filter"; 
import Modal from "../components/Modal/Modal";
  
  
  
const App = () => {  
  const [cardToggle, setCardToggle] = useState(true)
  const [filter, setFilter] = useState("")  
  const [state, setState] = useState ([  
    {  
      id:1,
      name: "ahmed",  
      age: 26,  
      adress: "moneeb",  
      phone: "0157363783",
      type: "boy"
    },  
    {  
      id:2,
      name: "sara",  
      age: 23,  
      adress: "paris",  
      phone: "0157234283",
      type: "girl"
    },  
    {  
      id:3,
      name: "saad",  
      age: 27,  
      adress: "manial",  
      phone: "0157355457",
      type: "boy"  
    },
    {  
      id:4,
      name: "mariam",  
      age: 28,  
      adress: "sharkia",  
      phone: "0157744958",
      type: "girl"
    },  
    {  
      id:5,
      name: "nada",  
      age: 25,  
      adress: "giza",  
      phone: "0157300783",
      type: "girl"
    },  
    {  
      id:6,
      name: "amr",  
      age: 31,  
      adress: "faida",  
      phone: "0153550678",
      type: "boy"
    },
  ]);  
  
  const deleteHandler = (e, selectedID) => {  
    // const deleteOperation = state.filter((e, idx) => idx !== clickIdx)  
    // setState(deleteOperation)  
    // console.log(state)  
    
    // setState(state.filter((e, idx) => idx !== clickIdx))  
    // console.log(state)  
  
    setState((prevState) => {  
      return prevState.filter(el => el.id !== selectedID );  
    });  
  }  
  
  const toggleButton = () => {  
    setCardToggle(!cardToggle)  
  };  

  const FilterName = (name) => {
    setFilter(name)
  }
  const namesHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter))
    }
    return state
  }
  return (  
    <div className={stylee.main}>  
      <Modal />
      <h1> List Of Data </h1> 
      <button style={{marginBottom: "20px"}} 
      onClick={toggleButton}>
        {cardToggle ? "Hide Names" : "Show Names"}
      </button>  
      <div className={cardToggle ? stylee.show : stylee.hide}> 
        <Filter Filteration={FilterName}/> 
        <CardList nameList={namesHandler()} deletFunc={deleteHandler}/>  
      </div>  
    </div>  
  )  
}  

export default App