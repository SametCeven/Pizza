import "./Radio.css";
import { useState } from "react";

export default function Radio(props){
    const {handleChange,error,errorMessages,radioValuesInitial} = props;
    const [radioValues,setRadioValues] = useState(radioValuesInitial);

    return(
        <>
            <dd className="title">
                <h1>Select Size</h1>
                {error?<p>* {errorMessages}</p>:""}
            </dd>
            <div className="input-radio">
                {radioValues.map((value,index)=>{
                    return(
                        <label 
                            data-cy="radio-label" 
                            className="radio-l" 
                            htmlFor={value}
                            key ={index}>
                            {value}
                            <input
                                className="radio-i"
                                type="radio"
                                name="size"
                                value={value}
                                id={value}
                                key={index}
                                onChange={handleChange}
                            ></input>
                        </label>
                    )
                })}
            </div>
        </>
    )
}

