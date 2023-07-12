import "./ItemList.css";
import Item from "../Item/Item";

const ItemList = ({products}) => {
    return(
        <div className="listgroup d-flex justify-content-around align-items-center bg-warning">
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList;