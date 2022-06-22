import React from "react"; 
import Card from "../Card/Card" 


const CardList = ({nameList, deletFunc }) => { 
	const cards = nameList.map(({id, ...otherProps}) => ( 
		<Card key={id}  id={id} {...otherProps} deletFunc={deletFunc} />
	)); 
	return <div>{cards}</div> 
}; 

export default CardList;