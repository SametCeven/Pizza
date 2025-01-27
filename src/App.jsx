import './App.css';
import OrderForm from "./components/OrderForm.jsx";
import Mainpage from './components/Mainpage.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';
import {Switch,Route} from "react-router-dom";
import {useState} from "react";

export default function App() {
  const [data,setData] = useState({});
  const [apiError,setApiError] = useState("");
  function handleData(temp){
    setData(temp);
  }
  function handleError(temp){
    setApiError(temp)
  }

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Mainpage></Mainpage>
        </Route>
        <Route path="/OrderForm">
          <OrderForm handleData={handleData} handleError={handleError}></OrderForm>
        </Route>
        <Route path="/OrderConfirmation">
          <OrderConfirmation data={data} apiError={apiError}></OrderConfirmation>
        </Route>
        
        
      </Switch>
    </>
  )
}
