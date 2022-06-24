import React, { Fragment, useState } from "react";  
import style from "./App.module.css"; 
import CardList from "../components/CardList/CardList" 
import FilterInput from "../components/FilterInput/FilterInput"; 
import Modal from "../components/Modal/Modal";
import Button from "../components/LayOut/Button";
import AddUser from "../components/AddUser/AddUser";
  
  
  
const App = () => {  
  const [cardToggle, setCardToggle] = useState(true)
  const [filter, setFilter] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [state, setState] = useState ([  
    {  
      id:1001,
      name: "ahmed",  
      age: 26,  
      adress: "moneeb",  
      phone: "0157363783",
      type: "boy"
    },  
    {  
      id:2000,
      name: "sara",  
      age: 23,  
      adress: "paris",  
      phone: "0157234283",
      type: "girl"
    },  
    {  
      id:3000,
      name: "saad",  
      age: 27,  
      adress: "manial",  
      phone: "0157355457",
      type: "boy"  
    },
    {  
      id:4000,
      name: "mariam",  
      age: 28,  
      adress: "sharkia",  
      phone: "0157744958",
      type: "girl"
    },  
    {  
      id:5000,
      name: "nada",  
      age: 25,  
      adress: "giza",  
      phone: "0157300783",
      type: "girl"
    },  
    {  
      id:6000,
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
  
  // const toggleButton = () => {  
  //   setCardToggle(!cardToggle)  
  // };  
  const addNewUser = (data) => {
    setState((prevState) => setState([...prevState, data]))
  }

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
    <Fragment>
      <div className={style.main}>  
        <h1> List Of Data </h1> 

        <div style={{ display: "flex"}}>
          <Button className={style.button} 
          onClick={() => setCardToggle(!cardToggle)}>
            {cardToggle ? "Hide Names" : "Show Names"}
          </Button>  
          <Button className={style.button} onClick={() => setShowModal(true)}>New Record</Button>
        </div>  
        <div className={cardToggle ? style.show : style.hide}> 
          <FilterInput Filteration={FilterName}/> 
          <CardList nameList={namesHandler()} deletFunc={deleteHandler}/>  
        </div>  
      </div>  
      <Modal show={showModal} closeModal={() => setShowModal(false)}>
        <AddUser addNewUser={addNewUser} closeModal={() => setShowModal(false)} />
      </Modal>
    </Fragment>
  )  
}  

export default App