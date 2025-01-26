export default function SiparisFooter(props){
    const {handleClick,pizzaCount,handleChange,isValid} = props
 
    return(
        <div>
            <div>
                <h1 className="title">Order Note</h1>
                <label>
                    <textarea name="note" onChange={handleChange} placeholder="Is there any note you would like to share?"/>
                </label>
            </div>
            <div>
                <button onClick={handleClick} value={pizzaCount} name="pizzaCount">-</button>
                <p>{pizzaCount}</p>
                <button onClick={handleClick} value={pizzaCount} name="pizzaCount">+</button>
            </div>
            <div>
                <h1>Order Details</h1>
                <h2>Toppings Amount</h2>
                <h2>Total Amount</h2>
                <button type="submit" disabled={!isValid}>ORDER</button>
            </div>
        </div>
    )

}