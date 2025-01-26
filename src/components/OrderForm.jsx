import {useState,useEffect} from "react";
import axios from "axios";
import "./OrderForm.css";
import Header from "./Header.jsx"; 
import Radio from "./Radio.jsx";
import Dropdown from "./Dropdown.jsx";
import Checkbox from "./Checkbox.jsx";
import Name from "./Name.jsx";
import OrderFooter from "./OrderFooter.jsx";

const initialFormData = {
    size:"",
    crust:"",
    toppings:[],
    name:"",
    note:"",
    pizzaCount:1,
}

const initialError = {
    size:true,
    crust:true,
    toppings:true,
    name:true,
}

const errorMessages = {
    size: "Please select size!",
    crust: "Please select crusty type!",
    toppings: "Plase select at least 4 and at most 10 toppings!",
    name: "Name needs to be at least 3 characters!"
}

const toppingsInitial = ["Pepperoni","Chicken","Corn","Garlic","Pineapple","Sausage","Onion","Sucuk","Green Pepper","Zucchini","Ham","Tomato","Jalepeno"]

export default function SiparisFormu(){
    const [formData,setFormData] = useState(initialFormData);
    const [error,setError] = useState(initialError)
    const [isValid,setIsValid] = useState(false);
    
    function handleClick(event){
        const {value,name,textContent} = event.target;
        if(formData.pizzaCount>1){
            if(textContent==="+") setFormData({...formData,[name]:Number(value)+1});
            else setFormData({...formData,[name]:Number(value)-1});
        }else if(formData.pizzaCount===1) {
            if(textContent==="+") setFormData({...formData,[name]:Number(value)+1});
        }
    }

    function handleChange(event){
        const {type,name,value} = event.target
        if(type === "checkbox"){
            let newValue;
            let oldValue = formData[name];
            if(oldValue.includes(value)){
                newValue = oldValue.filter((v)=>v!==value);
            }else{
                newValue = [...oldValue,value];                
            }
            setFormData({...formData,[name]:newValue});
        }
        else{
            setFormData({...formData,[name]:value});
        }

        if(name==="size"){
            if(value==="") setError({...error,[name]:true})
                else setError({...error,[name]:false})
        }if(name==="crust"){
            if(value==="Crust") setError({...error,[name]:true})
                else setError({...error,[name]:false})
        }if(name==="name"){
            if(value.length<3) setError({...error,[name]:true})
                else setError({...error,[name]:false})
        }
        
    }

    useEffect(()=>{
        if(formData.toppings.length<4 || formData.toppings.length>10) setError({...error,["toppings"]:true})
        else setError({...error,["toppings"]:false})
    },[formData.toppings])
    
    function handleSubmit(event){
        event.preventDefault();
        axios.post("https://reqres.in/api/pizza",formData)
        .then((response)=>console.log(response))
        .catch((error)=>console.log(error))
        console.log("submit")
    }

    useEffect(()=>{
        if(!error.size && !error.crust && !error.toppings && !error.name){
            setIsValid(true);
        }else setIsValid(false);
    },[error])
    
    return (
        <div className="wrapper">

            <Header></Header>
            <div className="content-wrapper">
                <div className="exp">
                    <h1>Position Absolute Spicy Pizza</h1>
                    <h1>85.50 tl</h1>
                    <p>Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <Radio 
                        handleChange={handleChange}
                        error = {error.size}
                        errorMessages = {errorMessages.size}
                        ></Radio>
                    <Dropdown 
                        handleChange={handleChange}
                        error = {error.crust}
                        errorMessages = {errorMessages.crust}
                        ></Dropdown>
                    <Checkbox 
                        handleChange={handleChange}
                        error = {error.toppings}
                        errorMessages = {errorMessages.toppings}
                        toppingsInitial = {toppingsInitial}
                        ></Checkbox>
                    <Name 
                        handleChange={handleChange}
                        error = {error.name}
                        errorMessages = {errorMessages.name}
                        ></Name>
                    <OrderFooter 
                        handleClick = {handleClick}
                        pizzaCount = {formData.pizzaCount}
                        handleChange = {handleChange}
                        isValid = {isValid}
                        ></OrderFooter>
                </form>

            </div>
        </div>
    )
}