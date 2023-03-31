const Compoprops = (props) => {
    console.log(props)
    return <h1>{props.nombre}</h1>
}
/* export const UserCard = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.amount}</h2>
            <p>{props.married ? "married" : "single"}</p>
            <ul>
                <li>{props.address.city}</li>
                <li>{props.address.street}</li>
            </ul>
        </div>
    )
} */
/* export const UserCard = (props) => {
    console.log(JSON.stringify(props))
    return (
        <div>
            <h1>{props.name}</h1>
            <h2>{props.amount}</h2>
            <p>{props.married ? "married" : "single"}</p>
            <ul>
                <li>{props.address.city}</li>
                <li>{props.address.street}</li>
            </ul>
        </div>
    )
} */
export const UserCard = ({name, amount, married, address,greet}) => {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{amount}</h2>
            <p>{married ? "married" : "single"}</p>
            <ul>
                <li>{address.city}</li>
                <li>{address["street"]}</li>
            </ul>
        </div>
    )
}
export default Compoprops;