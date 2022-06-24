import React from "react";
import style from "./Form.module.css";

const Form = (props) => {
    return <form onSubmit={props.onSubmit}>{props.children}</form>;
}

const Controller = (props) => {
    return 	<div className={style.control}>{props.children}</div>
}

Form.Controller = Controller

export default Form;