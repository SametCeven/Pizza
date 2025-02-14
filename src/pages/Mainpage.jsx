import "./Mainpage.css";
import {useHistory} from "react-router-dom";
import {useState} from "react";
import Footer from "../components/Footer.jsx";
import MainpageNav from "../components/MainpageNav.jsx";
import MainpageItem from "../components/MainpageItem.jsx";

const menuItemsInitial = [{
    img: "../images/iteration-2-images/pictures/food-1.png",
    title: "Terminal Pizza",
    price: 85.50,
    rating: 4.9,
    comments: 200,
},{
    img: "../images/iteration-2-images/pictures/food-2.png",
    title: "Position Absolute Acı Pizza",
    price: 85.50,
    rating: 4.9,
    comments: 200,
},{
    img: "../images/iteration-2-images/pictures/food-3.png",
    title: "useEffect Tavuklu Burger",
    price: 85.50,
    rating: 4.9,
    comments: 200,
}]

export default function Mainpage(){
    const [menuItems,setMenuItems] = useState(menuItemsInitial);
    let history = useHistory()
    function handleClick(){
        history.push("/OrderForm");
    }
    return(
        <div className="mainpage-wrapper">
            <div className="mainpage-container">
                <header>
                    <img src="../images/iteration-1-images/home-banner.png" alt="banner-mainpage" className="mainpage-bgimg"/>
                    <div>
                        <img src="../images/iteration-1-images/logo.svg" alt="logo-mainpage" className="mainpage-logo"/>
                        <h2>don't miss offers </h2>
                        <h1>CODE HUNGERS PIZZA, FILLS</h1>
                        <button onClick={handleClick}>I'm HUNGRY</button>
                    </div>
                </header>

                <div className="mainpage-navwrapper">
                    <MainpageNav></MainpageNav>
                </div>

                <section className="mainpage-hero">
                    <div className="mainpage-hero-s1">
                        <h1>Special Lezzetus</h1>
                        <h2>Position Absolute Acı Burger</h2>
                        <img src="../images/iteration-2-images/cta/kart-1.png" alt="card1" />
                        <button onClick={handleClick}>ORDER</button>
                    </div>
                    <div className="mainpage-hero-s2">
                        <div className="mainpage-hero-s21">
                            <h2>Hackathlon Burger Menu</h2>
                            <img src="../images/iteration-2-images/cta/kart-2.png" alt="card2" />
                            <button onClick={handleClick}>ORDER</button>
                        </div>
                        <div className="mainpage-hero-s22">
                            <h2>
                                <span>Veeeeery </span>
                                fast delivery like npm
                            </h2>
                            <img src="../images/iteration-2-images/cta/kart-3.png" alt="card3" />
                            <button onClick={handleClick}>ORDER</button>
                        </div>
                    </div>
                </section>

                <div className="mainpage-midtitle">
                    <h2>most delivered menus</h2>
                    <h1>Food For Appetizing Codes</h1>
                </div>

                <div className="mainpage-navwrapper">
                    <MainpageNav></MainpageNav>
                </div>

                <main>
                    {menuItems.map((menuItem,index)=>{
                        return(
                            <MainpageItem key={index} menuItem={menuItem}></MainpageItem>
                        )
                    })}
                </main>
                
            </div>
            <Footer></Footer>
        </div>
    )
}