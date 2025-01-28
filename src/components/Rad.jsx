export default function Rad(props){
    const {value,id,handleChange} = props;
    //<span className="radio-s"></span>
    return(
        <div>
            <label data-cy="radio-label" className="radio-l" htmlFor={id}>{value}
                <input className="radio-i" type="radio" value={value} id={id} name="size" onChange={handleChange} key={value}/>
                
            </label>
        </div>
        
    )
}