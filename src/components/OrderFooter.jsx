import "./OrderFooter.css";

export default function SiparisFooter(props){
    const {handleClick,pizzaCount,handleChange,isValid,toppingsAmount,amount,totalAmount} = props;
 
    return(
        <div className="order-footer">
            <div className="order-note">
                <h1 className="title">Order Note</h1>
                <label>
                    <textarea name="note" onChange={handleChange} placeholder="Is there any note you would like to share?" rows="5" cols="30"/>
                </label>
            </div>
            <div className="order-bottom">
                {isValid?<div className="order-counter">
                    <button onClick={handleClick} value={pizzaCount} name="pizzaCount" type="button">-</button>
                    <p>{pizzaCount}</p>
                    <button type="button" onClick={handleClick} value={pizzaCount} name="pizzaCount">+</button>
                </div>
                :""}
                <div className="order-total">
                        <div className="order-detail">
                            <h1>Order Details</h1>
                            <div className="order-amount">
                                <h2>Toppings Amount</h2>
                                <span>{toppingsAmount} ₺</span>
                            </div>
                            <div className="order-amount">
                                <h2>Amount Per Pizza</h2>
                                <span>{amount} ₺</span>
                            </div>
                            <div className="order-amount order-amount-total">
                                <h3>Total Amount</h3>
                                <span>{totalAmount} ₺</span>
                            </div>
                        </div>
                    {isValid?<button type="submit" disabled={!isValid}>ORDER</button>:""}
                </div>
            </div>
        </div>
    )

}