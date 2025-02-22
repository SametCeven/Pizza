import "./MainpageNav.css"
import {Link} from "react-router-dom";


export default function MainpageNav(){

    return(
        <nav className="mainpage-nav">
            <div className="mainpage-navitem">
                <img src="../../public/images/iteration-2-images/icons/1.svg" alt="korean" />
                <Link to="/OrderForm">NEW! Korean</Link>
            </div>
            <div className="mainpage-navitem">
                <img src="../../public/images/iteration-2-images/icons/2.svg" alt="pizza" />
                <Link to="/OrderForm">Pizza</Link>
            </div>
            <div className="mainpage-navitem">
                <img src="../../public/images/iteration-2-images/icons/3.svg" alt="burger" />
                <Link to="/OrderForm">Burger</Link>
            </div>
            <div className="mainpage-navitem">
                <img src="../../public/images/iteration-2-images/icons/4.svg" alt="friedfoods" />
                <Link to="/OrderForm">Fried Food</Link>
            </div>
            <div className="mainpage-navitem">
                <img src="../../public/images/iteration-2-images/icons/5.svg" alt="fastfood" />
                <Link to="/OrderForm">Fast Food</Link>
            </div>
            <div className="mainpage-navitem">
                <img src="../../public/images/iteration-2-images/icons/6.svg" alt="sodas" />
                <Link to="/OrderForm">Sodas</Link>
            </div>
        </nav>
    )
}