import "./MainpageItem.css";
import {Link} from "react-router-dom";

export default function MainpageItem(props){
    const {menuItem} = props

    return(
        <div className="mainpage-menuitem">
            <Link to="/OrderForm">
                <img src={menuItem.img} alt={menuItem.title} />
            </Link>
            <Link to="OrderForm">{menuItem.title}</Link>
            <div className="mainpage-menuitem-details">
                <span>{menuItem.rating}</span>
                <span>({menuItem.comments})</span>
                <span className="mainpage-menuitem-details-price">{menuItem.price} ₺</span>
            </div>
        </div>
    )
}