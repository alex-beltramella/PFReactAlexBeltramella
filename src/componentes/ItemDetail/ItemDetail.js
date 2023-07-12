import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return(
        <article className="card-item">
            <header className="header">
                <h2 className="item-header">
                    {name}
                </h2>
            </header>

            <picture>
                <img src={img} alt={name} className="item-img"/>
            </picture>

            <section>
                <p className="info">
                    categoria: {category}
                </p>
                <p className="info">
                    descripcion: {description}
                </p>
                <p className="info">
                    precio: ${price}
                </p>
            </section>

            <footer className="item-footer">
                <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("cantidad agregada",quantity)}/>
            </footer>
        </article>
    )
}

export default ItemDetail;