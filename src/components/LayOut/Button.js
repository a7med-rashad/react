import React from "react";
import style from "./Form.module.css"


const Button = (props) => {
    return (        
        <button className={style.button}
    onClick={props.onClick} type={props.type ? props.type : "button"}>
        {props.children}
        </button> )
}

export default Button;