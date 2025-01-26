import './App.css';
import OrderForm from "./components/OrderForm.jsx";
import Mainpage from './components/Mainpage.jsx';
import OrderConfirmation from './components/OrderConfirmation.jsx';
import {Switch,Route} from "react-router-dom";

export default function App() {

  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Mainpage></Mainpage>
        </Route>
        <Route path="/OrderForm">
          <OrderForm></OrderForm>
        </Route>
        <Route path="/OrderConfirmation">
          <OrderConfirmation></OrderConfirmation>
        </Route>
        
        
      </Switch>
    </>
  )
}
