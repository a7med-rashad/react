import React, { useState } from "react";
import Form from "../LayOut/Form";
import Button from "../LayOut/Button";

import style from "../Modal/Modal.module.css"


;
const AddUser = ( {addNewUser, closeModal} ) => {

    const [input, setInput] = useState({
        name: "",
        age: "",
        phone: "",
        adress: "",
        gender: "",
    })

    const submitForm = (e) => {
        e.preventDefault();
        addNewUser({
            id: Math.floor(Math.random() * 1000),
            name: input.name,
            age: input.age,
            phone: input.phone,
            adress: input.adress,
            gender: input.gender,
        })
        setInput( {
            name: "",
            age: "",
            phone: "",
            adress: "",
            gender: "",
        })
        closeModal()
    }

    const NewData = (e) => {
        
        const key = e.target.id;
        const value = e.target.value;
        setInput((prevInput) => {
            return ({ ...prevInput, [key]: value })
        })        
    }

    return (
    <Form onSubmit={submitForm}>
        <Form.Controller>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' placeholder="Enter Email" value={input.name} onChange={NewData}/>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="age">Age</label>
            <input type="text" id='age' placeholder="Enter Your Age" value={input.age} onChange={NewData}/>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="phone">Phone</label>
            <input type="text" id='phone' placeholder="Enter Your Phone" value={input.phone} onChange={NewData}/>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="adress">Adress</label>
            <input type="text" id='adress' placeholder="Enter Your Adress" value={input.adress} onChange={NewData}/>
        </Form.Controller>
        <Form.Controller>
            <label htmlFor="gender">Gender</label>
            <input type="text" id='gender' placeholder="Enter Your Gender" value={input.gender} onChange={NewData}/>
        </Form.Controller>
        <div className={style.buttonContainer}>
        <Button type='submit'>Send</Button>
        <Button type='reset'>Reset</Button>
        </div>
    </Form>
    )
}

export default AddUser;