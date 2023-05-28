import { useSelector } from "react-redux";
import { CardCart } from "../components";
import { useDocTitle } from "../hooks/useDocTitle.";
import "./Cart.css";

export function Cart() {
    
    useDocTitle("Cart")

    const { cartList:products, total } = useSelector(state => state.cart)

    return (
        <main className="container">
            <section>
                <h1 className="cart-heading">Cart Items: {products.length} / ${total}</h1>
                {products.map(product => {
                    return <CardCart
                                key={product.id}
                                product={product}
                            />
                })}
            </section>
        </main>
    )
}