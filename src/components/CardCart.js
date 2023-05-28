import { useDispatch } from "react-redux"
import { remove } from "../store/cartSlice";
import "./CardCart.css"

export function CardCart(props) {
    const {name, image, price} = props.product
    const dispatch = useDispatch()
    
    return (
        <div className="card-cart">
            <div className="cardcart-image">
                <img src={image} alt={name} />
            </div>
            <p className="cardcart-name">{name}</p>
            <p className="cardcart-price">${price}</p>
            <button onClick={()=>{dispatch(remove(props.product))}} className="button cardcart-button">Remove</button>
        </div>
    )
}