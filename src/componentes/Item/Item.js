import ItemCount from "../ItemCount/ItemCount";
import "./Item.css";
import { NavLink, Link } from "react-router-dom";

const Item = ({id, name, img, price, stock}) => {

    return(
        <div className="item_container card">
                <article className="card_item">
                    <header className="header">
                        <h2 className="item_header">
                            {name}
                        </h2>
                    </header>

                    <picture className="picture">
                        <img src={img} alt={name} className="item_img"/>
                    </picture>

                    <section className="">
                        <p className="info">
                            precio: ${price}
                        </p>
                        <p className="info">
                            stock disponible: {stock}
                        </p>
                    </section>

                    <footer className="item_footer">
                        <Link to={'/item/${id}'} className="option">Ver detalles</Link>
                    </footer>
                </article>
        </div>
    )
}

export default Item;