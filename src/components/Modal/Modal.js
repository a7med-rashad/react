import React, {Fragment} from "react";
import ReactDOM from 'react-dom';
import style from "./Modal.module.css"




const Backdrop = ({ close }) => {
	return <div className={style.backDrop} onClick={close}></div>

};
const Overlay = () => {
	return <div className={style.overlay}></div>
}

const Modal = ({ show , closeModal }) => {
	return (
		show && (
			<Fragment>
					{ReactDOM.createPortal(
						<Fragment>
							<Backdrop close={closeModal}/>
							<Overlay />
						</Fragment>,
						document.getElementById('modal')
						)}
			</Fragment>
		)
	);
}

export default Modal;