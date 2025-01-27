export default function Drop(props){
    const {value} = props;

    return(    
        <option value={value}>{value}</option>
    )

}