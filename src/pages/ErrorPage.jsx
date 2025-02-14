import "./ErrorPage.css"
export default function ErrorPage(props){
    const {apiError} = props;
    console.log(apiError);
    return(
        <div className="error">
            <span >ORDER IS NOT RECEIVED!</span>
            <span>{apiError.message}</span>
        </div>
    )
}