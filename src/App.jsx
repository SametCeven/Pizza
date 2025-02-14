import './App.css';
import OrderForm from "./pages/OrderForm.jsx";
import Mainpage from './pages/Mainpage.jsx';
import OrderConfirmation from './pages/OrderConfirmation.jsx';
import ErrorPage from "./pages/ErrorPage.jsx";
import {Switch,Route} from "react-router-dom";
import {useState} from "react";
import {ToastContainer} from "react-toastify";

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
      <ToastContainer
        position='bottom-right'
      ></ToastContainer>
      <Switch>
        <Route path="/" exact>
          <Mainpage></Mainpage>
        </Route>
        <Route path="/OrderForm">
          <OrderForm handleData={handleData} handleError={handleError}></OrderForm>
        </Route>
        <Route path="/OrderConfirmation">
          <OrderConfirmation data={data}></OrderConfirmation>
        </Route>
        <Route path="/ErrorPage">
          <ErrorPage apiError={apiError}></ErrorPage>
        </Route>
      </Switch>
    </>
  )
}
