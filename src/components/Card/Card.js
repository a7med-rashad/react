import React from "react"; 
import style from "./Card.module.css" 
  
  
const Card = ({nameList, type, deletFunc}) => { 
					const cards = nameList.map(({ name, age, adress, phone}, idx) => ( 
						<div className={style.cardWrapper} key={idx} style={{backgroundColor: type === "girls" ? "pink" : "green"}}> 
							<div>Name: {name}</div> 
							<div>Age: {age}</div> 
							<div>Phone: {phone}</div> 
							<div>Adress: {adress}</div> 
							<div className={style.deleteBtn} onClick={(e) => deletFunc(e, idx)}>X</div> 
						</div> 
					)); 
					return <div>{cards}</div> 
}; 
  
export default Card;