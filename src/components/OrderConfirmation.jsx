import "./OrderConfirmation.css";
export default function OrderConfirmation(props){
    const {data,apiError} = props;
    const {size,crust,toppings,toppingsAmount,totalAmount} = data;
    return(
        <>
            {apiError==="" ? 
            <
                div className="order-conf-wrapper">   
                    <div className="order-conf-container">
                        <header>
                            <img src="../images/iteration-1-images/logo.svg" alt="logo-conf" className="conf-logo"/>
                            <h2 className="satisfy">order is on the way!</h2>
                            <h1>ORDER RECEIVED</h1>
                        </header>
                        <main>
                            <h3>Poistion Absolute Acı Pizza</h3>
                            <section className="order-conf-detail">
                                <div>
                                    <span>Size:</span>
                                    <span className="order-conf-val">{size}</span>
                                </div>
                                <div>
                                    <span>Crust:</span>
                                    <span className="order-conf-val">{crust}</span>
                                </div>
                                <div className="order-conf-toppings">
                                    <span>Toppings:</span>
                                    <p className="order-conf-val">{`${toppings}, `}</p>
                                </div>
                            </section>
                            <section className="order-conf-amount-head">
                                <h4>Order Details</h4>
                                <div className="order-conf-amount">
                                    <span>Toppings Amount</span>
                                    <span>{toppingsAmount} ₺</span>
                                </div>
                                <div className="order-conf-amount">
                                    <span>Total Amount</span>
                                    <span>{totalAmount} ₺</span>
                                </div>
                            </section>
                        </main>
                    </div>
                </div>: 

                <h1 className="error">Connection Error, Order is not Completed!</h1>}
        </>
    )
}