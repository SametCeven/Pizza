export default function Check(props){
    const {topping,handleChange} = props;
    return(
        <div className="input-check">
            <label className="check-l" htmlFor={topping}> {topping}
                <input 
                    className="check-i"
                    type="checkbox" 
                    name="toppings"
                    id={topping}
                    value={topping}
                    onChange={handleChange}
                    />
                <span className="check-s"></span>
            </label>
        </div>
    )
}