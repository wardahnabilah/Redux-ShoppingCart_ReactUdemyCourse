import { Link, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import "./Header.css";
import { useSelector } from 'react-redux';

export function Header() {
    
    const cartList = useSelector(state=>state.cart.cartList)

    return (
        <header className="container header">
            <Link to="/" className="header-logo">
                <img src={Logo} alt="logo" />
                <span className="text">Redux Shopping Cart</span>
            </Link>
            <nav className="nav">
                <NavLink to="/" className="nav-link" end>Home</NavLink>
                <NavLink to="/cart" className="nav-link">Cart</NavLink>
            </nav>
            <Link to="/cart" className="cart-qty">Cart: {cartList.length}</Link>
        </header>
    )
}