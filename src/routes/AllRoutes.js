import { Home, Cart } from '../pages';
import { Route, Routes } from 'react-router-dom';

export function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
        </Routes>
    )
}