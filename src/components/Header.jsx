import {Link} from "react-router-dom";
export default function Header(){

    return(
        <div className="header">
            <img className="header-logo" src="../images/iteration-1-images/logo.svg"></img>
            <nav className="nav">
                <Link to="/">Mainpage</Link>
                <Link to="/OrderForm">Create Order</Link>
            </nav>
        </div>
    )
}