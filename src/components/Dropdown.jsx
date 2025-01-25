export default function Dropdown(){

    return(
        <form>
            <div className="title">
                <h1>Hamur Seç</h1>
                <p>*</p>
            </div>
            <div>    
                <select id="dropdown" name="dropdown">
                    <option value="hamur">Hamur Kalınlığı</option>
                    <option value="ince">İnce</option>
                    <option value="orta">Orta</option>
                    <option value="kalın">Kalın</option>
                </select>
            </div>
        </form>
    )

}