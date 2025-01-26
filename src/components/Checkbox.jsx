import Check from "./Check";
import {useState} from "react";



export default function Checkbox(props){
    const {handleChange,error,errorMessages,toppingsInitial} = props;
    const [toppings,setToppings] = useState(toppingsInitial);

    

    return(
        <>
            <div className="title">
                <h1>Toppings</h1>
                <h2>Maximum of 10 toppings can be selected. 5tl</h2>
                {error?<p>* {errorMessages}</p>:""}
            </div>
            <div>
                {toppings.map((topping,index)=>{
                    return(<Check 
                        key={index}
                        topping = {topping}
                        handleChange = {handleChange}
                    />)
                })}
            </div>
        </>
    )

}