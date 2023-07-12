import CarritoImg from "./assets/carrito.svg";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div className="d-flex justify-content-center align-items-center col ms-5">
            <Link to='/' href="#" ><img className="" src={CarritoImg} alt="imagen de carrito" /></Link>
            0
        </div>
    )
}

export default CartWidget;