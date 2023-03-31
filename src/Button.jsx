import PropTypes from 'prop-types';
import { FaBeer } from "react-icons/fa";
const ButtonDos = ({text, name = "defauldName", lastName}) => {
    return <button>
        {text} {name} {lastName}
    </button>
}
ButtonDos.propTypes = {
    text: PropTypes.string.isRequired
}
ButtonDos.defaultProps = {
    lastName : "defauldLastName"
}
const ButtonUno = () => {
    const handlerFetch = ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))
    }
    return <button onClick={ handlerFetch}>
        <FaBeer/>
        Traer datos</button>
}
export {ButtonUno, ButtonDos}