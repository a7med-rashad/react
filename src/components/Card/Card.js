import React from "react"; 
import style from "./Card.module.css" 


const Card = ({ id, name, age, adress, phone, type, deletFunc}) => { 
	return (
		<div 
			className={style.cardWrapper} key={id} 
			style={{backgroundColor: type === "girl" ? "pink" : "green"}}
		> 
			<div>Name: {name}</div> 
			<div>Age: {age}</div> 
			<div>Phone: {phone}</div> 
			<div>Adress: {adress}</div> 
			<div 
				className={style.deleteBtn} 
				onClick={(e) => deletFunc(e, id)}
			>
				X
			</div> 
		</div> 
	); 
}; 

export default Card;