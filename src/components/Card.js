import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import "./Card.css";

export function Card(props) {
    const {id, name, price, image} = props.product

    const dispatch = useDispatch()

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <p className="card-name">{name}</p>
            <div className="card-detail">
                <p className="price">${price}</p>
                <button onClick={() => dispatch(add(props.product))} className="button">Add To Cart</button>
            </div>
        </div>
    )
}