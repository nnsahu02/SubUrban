import { useLocation } from 'react-router-dom';
import './Item.css'

function Item() {
    const location = useLocation();
    const product = location.state.product;

    console.log(product)

    return (
        <div className="Item">
            <img src={product.productImage} className="ItemImage" alt="..." />
            <div className="details">
                <h5 className="card-title">Title : {product.title}</h5>
                <p className="card-text">Description : {product.description}</p>
                <p className="card-price">Price : {product.price}</p>
                <p className="card-size">size : {product.availableSizes[0]},{product.availableSizes[1]} </p>

            </div>
        </div>
    )
}

export default Item
