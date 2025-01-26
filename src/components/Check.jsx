export default function Check(props){
    const {topping,handleChange} = props;
    return(
        <div className="input-check">
            <input 
                type="checkbox" 
                name="toppings"
                id={topping}
                value={topping}
                onChange={handleChange}
                />
            <label htmlFor={topping}>{topping}</label>
        </div>
    )
}