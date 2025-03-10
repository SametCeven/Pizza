import "./Checkbox.css"
import {useState} from "react";



export default function Checkbox(props){
    const {handleChange,error,errorMessages,toppingsInitial} = props;
    const [toppings,setToppings] = useState(toppingsInitial);

    

    return(
        <>
            <dd className="title">
                <h1>Toppings</h1>
                <h2>Maximum of 10 toppings can be selected. 5₺</h2>
                {error?<p>* {errorMessages}</p>:""}
            </dd>
            <div>
                {toppings.map((topping,index)=>{
                    return(
                        <div className="input-check" key={index}>
                            <label 
                                className="check-l" 
                                key={index}
                                htmlFor={topping}
                                >{topping}
                                <input 
                                    className="check-i"
                                    type="checkbox" 
                                    name="toppings"
                                    id={topping}
                                    key={toppings}
                                    value={topping}
                                    onChange={handleChange}
                                />
                                <span className="check-s" key={index+200}></span>
                            </label>

                        </div>
                    )
                })}
            </div>
        </>
    )

}