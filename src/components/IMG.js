
const WhichFlag = (props) => {
    return (

        <div className="container">
            <img className="flag" src={props.image} alt={props.image}></img>
            <h1 > {props.description}</h1>
        </div>
    )
}
export default WhichFlag;