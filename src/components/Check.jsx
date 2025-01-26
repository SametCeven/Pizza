export default function Check(props){
    const {topping,handleChange} = props;

    return(
        <div>
            <label> {topping}
                <input type="checkbox" 
                name="toppings"
                value={topping}
                onChange={handleChange}
                />
            </label>
        </div>
    )
}