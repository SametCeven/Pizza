export default function Radio(props){
    const {handleChange,error,errorMessages} = props;

    
    return(
        <>
            <div className="title">
                <h1>Select Size</h1>
                <p>*</p>
                {error?<p>{errorMessages}</p>:""}
            </div>
            <div className="input">
                <label>Small
                    <input type="radio" value="Small" id="small" name="size" onChange={handleChange}/>
                </label>
                <label>Medium
                    <input type="radio" value="Medium" id="medium" name="size" onChange={handleChange}/>
                </label>
                <label>Large
                    <input type="radio" value="Large" id="large" name="size" onChange={handleChange}/>
                </label>
            </div>
    </>
    )
}