import React, {Fragment} from "react";
import ReactDOM from 'react-dom';
import style from "./Modal.module.css"
import AddUser from "../AddUser/AddUser";




const Backdrop = ({ close, show }) => {
	return <div className={`${style.backDrop} ${show ? style.showBack : null }`} onClick={close}></div>

};
const Overlay = ({children, show }) => {
	return (
	<div className={`${style.overlay} ${show ? style.showOverlay : null }`}>
		{children}
	</div>
)}

const Modal = ({children, show , closeModal}) => {
	return (
			<Fragment>
					{ReactDOM.createPortal(
						<Fragment>
							<Backdrop close={closeModal} show={show}/>
							<Overlay show={show}>{children}</Overlay>
						</Fragment>,
						document.getElementById('modal')
						)}
			</Fragment>
	);
}

export default Modal;