import {useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./OrderForm.css";
import Header from "./Header.jsx"; 
import Radio from "./Radio.jsx";
import Dropdown from "./Dropdown.jsx";
import Checkbox from "./Checkbox.jsx";
import Name from "./Name.jsx";
import OrderFooter from "./OrderFooter.jsx";
import Footer from "./Footer.jsx";


const initialFormData = {
    size:"",
    crust:"",
    toppings:[],
    name:"",
    note:"",
    pizzaCount:1,
    toppingsCounter:0,
    toppingsAmount:0,
    amount:0,
    totalAmount:0,
}

const initialError = {
    size:true,
    crust:true,
    toppings:true,
    name:true,
}

const errorMessages = {
    size: "Please select size!",
    crust: "Please select crust type!",
    toppings: "Plase select at least 4 and at most 10 toppings!",
    name: "Name needs to be at least 3 characters!"
}

const toppingsInitial = ["Pepperoni","Chicken","Corn","Garlic","Pineapple","Sausage","Onion","Sucuk","Green Pepper","Zucchini","Ham","Tomato","Jalepeno"];
const radioValuesInitial = ["Small","Medium","Large"];
const dropdownValuesInitial = ["Select Crust Type","Thin","Medium","Thick"];

export default function SiparisFormu(props){
    const {handleData,handleError} = props;
    const [formData,setFormData] = useState(initialFormData);
    const [error,setError] = useState(initialError);
    const [isValid,setIsValid] = useState(false);
    let history = useHistory();

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
            if(value==="Select Crust Type") setError({...error,[name]:true})
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
        .then((response)=>{
            console.log(response.data);
            handleData(response.data);
        })
        .catch((error)=>{
            console.log(error);
            handleError(error);
        })
        history.push("/OrderConfirmation");
    }

    useEffect(()=>{
        if(!error.size && !error.crust && !error.toppings && !error.name){
            setIsValid(true);
        }else setIsValid(false);
    },[error])
    
    useEffect(()=>{
        setFormData({...formData,["toppingsCounter"]:formData.toppings.length});
    },[formData.toppings])

    useEffect(()=>{
        let tempNum = Number(formData.toppingsCounter) * 5
        let temp = (Math.round(tempNum * 100) / 100).toFixed(2);
        setFormData({...formData,["toppingsAmount"]:temp});
    },[formData.toppingsCounter])

    useEffect(()=>{
        let tempNum = 85.5 + Number(formData.toppingsAmount)
        let temp = (Math.round(tempNum * 100) / 100).toFixed(2)
        setFormData({...formData,["amount"]:temp});
    },[formData.toppingsAmount])

    useEffect(()=>{
        let tempNum = Number(formData.amount) * Number(formData.pizzaCount)
        let temp = (Math.round(tempNum * 100) / 100).toFixed(2)
        setFormData({...formData,["totalAmount"]:temp});
    },[formData.amount,formData.pizzaCount])


    return (
        <>
        <div className="wrapper">

            <Header></Header>
            <div className="content-wrapper">
                <section className="exp">
                    <h1>Position Absolute Spicy Pizza</h1>
                    <h1>85.50 ₺</h1>
                    <p>Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.</p>
                </section>

                <form onSubmit={handleSubmit}>
                    <div className="form-sub1">
                        <div>
                            <Radio 
                                handleChange={handleChange}
                                error = {error.size}
                                errorMessages = {errorMessages.size}
                                radioValuesInitial = {radioValuesInitial}
                                ></Radio>
                        </div>
                        <div>
                            <Dropdown 
                                handleChange={handleChange}
                                error = {error.crust}
                                errorMessages = {errorMessages.crust}
                                dropdownValuesInitial = {dropdownValuesInitial}
                                ></Dropdown>
                        </div>
                    </div>
                    <div>
                        <Checkbox 
                            handleChange={handleChange}
                            error = {error.toppings}
                            errorMessages = {errorMessages.toppings}
                            toppingsInitial = {toppingsInitial}
                            ></Checkbox>
                    </div>
                    <div>
                    <Name 
                        handleChange={handleChange}
                        error = {error.name}
                        errorMessages = {errorMessages.name}
                        ></Name>
                    </div>
                    <div>
                    <OrderFooter 
                        handleClick = {handleClick}
                        pizzaCount = {formData.pizzaCount}
                        handleChange = {handleChange}
                        isValid = {isValid}
                        toppingsAmount = {formData.toppingsAmount}
                        amount = {formData.amount}
                        totalAmount = {formData.totalAmount}
                        ></OrderFooter>
                    </div>
                </form>

            </div>
            
        </div>
        <Footer></Footer>
        </>
    )
}