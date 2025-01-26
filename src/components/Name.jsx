export default function Name(props){
    const{handleChange,error,errorMessages} = props;
    return(
        <>
            <div className="title">
                <h1>Name</h1>
                {error?<p>* {errorMessages}</p>:""}
            </div>
            
            <label>
                <input placeholder="Name" onChange={handleChange} name="name"></input>
            </label>
        </>
    )
}