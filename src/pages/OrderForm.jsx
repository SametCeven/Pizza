import {useState,useEffect} from "react";
import { useHistory,Link } from "react-router-dom";
import axios from "axios";
import "./OrderForm.css";
import Header from "../components/Header.jsx"; 
import Radio from "../components/Radio.jsx";
import Dropdown from "../components/Dropdown.jsx";
import Checkbox from "../components/Checkbox.jsx";
import Name from "../components/Name.jsx";
import OrderFooter from "../components/OrderFooter.jsx";
import Footer from "../components/Footer.jsx";
import {toast} from "react-toastify";


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
const radioValuesInitial = ["S","M","L"];
const dropdownValuesInitial = ["---Select Crust Type---","Thin","Medium","Thick"];

export default function SiparisFormu(props){
    const {handleData,handleError} = props;
    const [formData,setFormData] = useState(initialFormData);
    const [error,setError] = useState(initialError);
    const [isValid,setIsValid] = useState(false);
    const [loading,setLoading] = useState(false);
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
            if(value===dropdownValuesInitial[0]) setError({...error,[name]:true})
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
        setLoading(true);
        axios.post("https://reqres.in/api/pizza",formData)
        .then((response)=>{
            console.log(response.data);
            handleData(response.data);
            toast.success("Order Received");
            history.push("/OrderConfirmation");
        })
        .catch((error)=>{
            console.log(error);
            handleError(error);
            toast.error("Order Failed");
            history.push("/ErrorPage");
        })
        .finally(()=>{
            setLoading(false);
        })
    }

    useEffect(()=>{
        if(!error.size && !error.crust && !error.toppings && !error.name){
            setIsValid(true);
        }else setIsValid(false);
    },[error])
    
    useEffect(()=>{
        let toppingsCounter = formData.toppings.length; 
        
        let tempToppingsAmountNum = Number(toppingsCounter) * 5;
        let tempToppingsAmount = (Math.round(tempToppingsAmountNum * 100) / 100).toFixed(2);

        let tempAmountNum = 85.5 + Number(tempToppingsAmount);
        let tempAmount = (Math.round(tempAmountNum * 100) / 100).toFixed(2);

        let tempTotalAmountNum = Number(tempAmount) * Number(formData.pizzaCount);
        let tempTotalAmount = (Math.round(tempTotalAmountNum * 100) / 100).toFixed(2);
        //{...formData,["totalAmount"]:tempTotalAmount,["amount"]:tempAmount,["toppingsAmount"]:tempToppingsAmount,["toppingsCounter"]:toppingsCounter}
        
        setFormData(
            {...formData,["totalAmount"]:tempTotalAmount,["amount"]:tempAmount,["toppingsAmount"]:tempToppingsAmount,["toppingsCounter"]:toppingsCounter}
        )

    },[formData.toppings,formData.pizzaCount])

    return (
        <>
        <div className="wrapper">

            <Header></Header>
            <div className="content-wrapper">
                <div className="content-wrapper-sub1">
                    <img src="../images/iteration-2-images/pictures/form-banner.png" alt="" />
                    <nav className="form-nav">
                        <Link to="/">Mainpage</Link>
                        <Link to="/OrderForm" className="imp">Create Order</Link>
                    </nav>
                    <section className="exp">
                        <h1>Position Absolute Spicy Pizza</h1>
                        <div className="exp-detail">
                            <span className="exp-d1">85.50 ₺</span>
                            <div className="exp-d2">
                                <span>4.9</span>
                                <span>(200)</span>
                            </div>
                        </div>
                        <p>Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizza is life.Pizz</p>
                    </section>
                </div>
                <div className="content-wrapper-sub2">
                    <form onSubmit={handleSubmit}>
                        <div className="form-sub1">
                            <div className="form-sub1-radio">
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
                        <div className="form-name">
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
                            loading = {loading}
                            ></OrderFooter>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
        
        </>
    )
}