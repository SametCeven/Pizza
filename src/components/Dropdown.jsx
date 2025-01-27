export default function Dropdown(props){
    const {handleChange,error,errorMessages} = props;
    return(
        <>
            <dd className="title">
                <h1>Select Crust Type</h1>
                {error?<p>* {errorMessages}</p>:""}
            </dd>
            <div>    
                <select id="dropdown" name="crust" onChange={handleChange}>
                    <option value="Crust">Select Crust Type</option>
                    <option value="Thin">Thin</option>
                    <option value="Medium">Medium</option>
                    <option value="Thick">Thick</option>
                </select>
            </div>
        </>
    )

}