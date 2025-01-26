export default function Radio(props){
    const {handleChange,error,errorMessages} = props;

    
    return(
        <>
            <div className="title">
                <h1>Select Size</h1>
                {error?<p>* {errorMessages}</p>:""}
            </div>
            <div className="input-radio">
                <div>
                    <input type="radio" value="Small" id="small" name="size" onChange={handleChange}/>
                    <label htmlFor="small">Small</label>
                </div>
                <div>
                    <input type="radio" value="Medium" id="medium" name="size" onChange={handleChange}/>
                    <label htmlFor="medium">Medium</label>
                </div>
                <div>
                    <input type="radio" value="Large" id="large" name="size" onChange={handleChange}/>
                    <label htmlFor="large">Large</label>
                </div>
            </div>
        </>
    )
}