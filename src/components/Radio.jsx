import { useState } from "react";
import Rad from "./Rad.jsx";

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
                    return(<Rad
                        type="radio"
                        name="size"
                        value={value}
                        id={value}
                        key={index}
                        handleChange={handleChange}
                    ></Rad>)
                })}
            </div>
        </>
    )
}

