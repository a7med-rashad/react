import React, { useState }from "react";
import style from "./Filter.module.css"



const Filter = ({Filteration}) => {
    const [filter, setFilter] = useState("")


const filterHandler = (e) => {
    const names = e.target.value
			setFilter(names)
      Filteration(names)
}
  
    return (
        <div className={style.inputDiv}>
            <input 
							type="text" 
							placeholder="Filter by key" 
							value={filter} 
							onChange={filterHandler}
						/>
        </div>
    )
}

export default Filter