export default function Check(props){
    const {malzeme} = props;

    return(
        <div>
            <label> {malzeme}
                <input type="checkbox" 
                name="Check"
                value={malzeme}
                />
            </label>
        </div>
    )
}