import "./SiparisFormu.css"
import Header from "./Header.jsx" 
import Radio from "./Radio.jsx"
import Dropdown from "./Dropdown.jsx"
import Checkbox from "./Checkbox.jsx"
import SiparisFooter from "./SiparisFooter.jsx"

export default function SiparisFormu(){

    return (
        <div className="wrapper">
            <Header></Header>
            <div className="content-wrapper">
                <div className="exp">
                    <h1>Position Absolute Acı Pizza</h1>
                    <h1>85.50 tl</h1>
                    <p>Frontend Dev olarak hala position:absoulte kullanıyorsan bu çok acı pizza tam sana göre. Pizza,domates,peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzettli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>
                <Radio></Radio>
                <Dropdown></Dropdown>
                <Checkbox></Checkbox>
                <SiparisFooter></SiparisFooter>
            </div>
        </div>
    )
}