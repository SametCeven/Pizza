import "./Footer.css"
import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
export default function Footer(){
    const menuItems = ["Terminal Pizza","5 Kişilik Hackathlon Pizza","useEffect Tavuklu Pizza","Beyaz Console Frosty","Testler Geçti Mutlu Burger","Position Absoulte Acı Burger"];
    const [menu,setMenu] = useState(menuItems);
    const li = ["li-0.png","li-1.png","li-2.png","li-3.png","li-4.png","li-5.png"];
    const [imgs,setImgs] = useState(li);

    return(
        <footer className="footer">
            <div className="footer-sub">
                <div className="footer-info">
                    <img id="footer-icon-logo" src="../images/iteration-2-images/footer/logo-footer.svg" alt="footer-logo" />
                    <div>
                        <img src="../images/iteration-2-images/footer/icons/icon-1.png" alt="footer-icon-map" />
                        <p>341 Londonderry Road, Istanbul Turkey</p>
                    </div>
                    <div>
                        <img src="../images/iteration-2-images/footer/icons/icon-2.png" alt="footer-icon-email" />
                        <span>aciktim@teknolojikyemekler.com</span>
                    </div>
                    <div>
                        <img src="..//images/iteration-2-images/footer/icons/icon-3.png" alt="footer-icon-phone" />
                        <span>+90 216 123 45 67</span>
                    </div>
                </div>

                <div className="footer-menu">
                    <h1>Hot Menu</h1>
                    {menu.map((men,index)=>{
                        return(
                            <span key={index} >{men}</span>
                        )
                    })}
                </div>

                <div className="footer-insta">
                    <h1>Instagram</h1>
                    {imgs.map((img,index)=>{
                        let tempSrc = `../images/iteration-2-images/footer/insta/${img}`;
                        return( 
                            <img key={index} src={tempSrc}/>
                        )
                    })}
                </div>
            </div>

            <div className="footer-span">
                    <span>2023 Teknolojik Yemekler.</span>
                    <FontAwesomeIcon icon={faTwitter} />
                </div>
        </footer>

    )
}