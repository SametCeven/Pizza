import Check from "./Check";
import {useState} from "react";

const malzemelerInitial = ["Pepperoni","Tavuk Izgara","Mısır","Sarımsak","Ananas","Sosis","Soğan","Sucuk","Biber","Kabak","Kanada Jambonu","Domates","Jalepeno","Sucuk"]

export default function Checkbox(){
    const [malzemeler,setMalzemeler] = useState(malzemelerInitial);

    return(
        <form>
            <div className="title title-check">
                <h1>Ek Malzemeler</h1>
                <h2>En fazla 10 malzeme seçebilirsiniz. 5tl</h2>
            </div>
            <div>
                {malzemeler.map((malzeme)=>{
                    return(<Check
                        malzeme = {malzeme}
                    />)
                })}
            </div>
        </form>
    )

}