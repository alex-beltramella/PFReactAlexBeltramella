import CartWidget from "../CardWidget/CartWidget";
import Logo from "../NavBar/assets/logo.png";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className="container-fluid">
            <nav className="navbar d-flex row w-100">
                <Link to="/" className="logo-img col">
                    <img className="w-25" src={Logo} alt="logo navbar"/>
                </Link>
                <div className=" Categories navbar-container container-fluid d-flex col">
                        <NavLink to={"/category/Inicio"} className={({isActive}) => isActive ? "ActiveOption" : "option"}>Inicio</NavLink>
                        <NavLink to={"/category/contactos"} className={({isActive}) => isActive ? "ActiveOption" : "option"}>Contactos</NavLink>
                        <NavLink to={"/category/productos"} className={({isActive}) => isActive ? "ActiveOption" : "option"}>Productos</NavLink>
                </div>
                <CartWidget />

            
            </nav>
        </header>
    )
}

export default NavBar;