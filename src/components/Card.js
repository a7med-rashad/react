import React from "react";



const Card = ({nameList, color}) => {
    const cards =  nameList.map(({ name, age, adress, phone}, idx) => (
                <div className="cardWrapper" key={idx} style={{backgroundColor: color === "girls" ? "pink" : "green"}}>
                <div>Name: {name}</div>
                <div>Age: {age}</div>
                <div>Phone: {phone}</div>
                <div>Adress: {adress}</div>
                </div>
            ));
    return <div>{cards}</div>
};

export default Card;