import "./Mainpage.css";
import {useHistory} from "react-router-dom";

export default function Mainpage(){
    let history = useHistory()
    function handleClick(){
        history.push("/OrderForm");
    }
    return(
        <div className="mainpage-container">
            <img src="../images/iteration-1-images/home-banner.png" alt="banner-mainpage" className="mainpage-bgimg"/>
            <img src="../images/iteration-1-images/logo.svg" alt="logo-mainpage" className="mainpage-logo"/>
            <h1>
                <span>KOD ACIKTIRIR</span>
                <br></br>
                <span>PİZZA, DOYURUR</span>
            </h1>
            <button onClick={handleClick}>ACIKTIM</button>
        </div>
    )
}