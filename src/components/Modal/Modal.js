import React, {Fragment} from "react";
import style from "./Modal.module.css"

const Modal = () => {
    return ( 
        <Fragment>
            <div className={style.backDrop}></div>
            <div className={style.overlay}></div>
        </Fragment>
    );
}

export default Modal;