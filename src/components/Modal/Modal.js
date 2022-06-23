import React, {Fragment} from "react";
import ReactDOM from 'react-dom';
import style from "./Modal.module.css"




const Backdrop = ({ close, show }) => {
	return <div className={`${style.backDrop} ${show ? style.showBack : null }`} onClick={close}></div>

};
const Overlay = ({ show }) => {
	return (
	<div className={`${style.overlay} ${show ? style.showOverlay : null }`}>
		<form>
			<div className={style.control}>
				<label htmlFor="email">Name</label>
				<input type="email" placeholder="Enter Email"/>
			</div>
		</form>
	</div>
)}

const Modal = ({ show , closeModal}) => {
	return (
			<Fragment>
					{ReactDOM.createPortal(
						<Fragment>
							<Backdrop close={closeModal} show={show}/>
							<Overlay show={show}/>
						</Fragment>,
						document.getElementById('modal')
						)}
			</Fragment>
	);
}

export default Modal;