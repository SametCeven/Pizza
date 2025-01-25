export default function Radio(){
    return(
        <form>
            <div className="title">
                <h1>Boyut Seç</h1>
                <p>*</p>
            </div>
            <div className="input">
                <label>Küçük
                    <input type="radio" value="Küçük" id="küçük" name="radio"/>
                </label>
                <label>Orta
                    <input type="radio" value="Orta" id="orta" name="radio"/>
                </label>
                <label>Büyük
                    <input type="radio" value="Büyük" id="büyük" name="radio"/>
                </label>
            </div>
    </form>
    )
}