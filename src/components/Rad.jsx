export default function Rad(props){
    const {value,id,handleChange} = props;
    
    return(
        <div>
            <input type="radio" value={value} id={id} name="size" onChange={handleChange} key={value}/>
            <label htmlFor={id}>{value}</label>
        </div>
        
    )
}