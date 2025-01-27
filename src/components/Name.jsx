export default function Name(props){
    const{handleChange,error,errorMessages} = props;
    return(
        <>
            <dd className="title">
                <h1>Name</h1>
                {error?<p>* {errorMessages}</p>:""}
            </dd>
            
            <label>
                <input placeholder="Name" onChange={handleChange} name="name"></input>
            </label>
        </>
    )
}