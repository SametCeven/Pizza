import "./Dropdown.css"
import { useState } from "react";

export default function Dropdown(props){
    const {handleChange,error,errorMessages,dropdownValuesInitial} = props;
    const [dropdownValues,setDropdownValues] = useState(dropdownValuesInitial);

    return(
        <>
            <dd className="title">
                <h1>Select Crust Type</h1>
                {error?<p>* {errorMessages}</p>:""}
            </dd>
            <div>    
                <select id="dropdown" name="crust" onChange={handleChange}>
                    {dropdownValues.map((value,index)=>{
                        return(
                            <option value={value} key={index} >{value}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )

}