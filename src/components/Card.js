import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../store/cartSlice";
import "./Card.css";

export function Card(props) {
    const {id, name, price, image} = props.product
    const [isInCart, setIsInCart] = useState(false)

    const dispatch = useDispatch()
    const cartList = useSelector(state => state.cart.cartList)

    useEffect(()=> {
        const productExist = cartList.find(productInCartList => id === productInCartList.id)

        if(productExist) {
            setIsInCart(true)
        } else {
            setIsInCart(false)
        }
    }, [cartList, id])

    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <p className="card-name">{name}</p>
            <div className="card-detail">
                <p className="price">${price}</p>
                {isInCart ? <button onClick={() => dispatch(remove(props.product))} className="button remove">Remove</button> :
                    <button onClick={() => dispatch(add(props.product))} className="button">Add To Cart</button>
                }
            </div>
        </div>
    )
}