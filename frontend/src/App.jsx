import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Orders from "./pages/Orders.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Cart from "./pages/Cart.jsx";
import BaseContext from "./components/BaseContext.jsx";
import ConfirmOrder from "./pages/ConfirmOrder.jsx";

export default function App() {
    return (
        <BaseContext>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<h1 className="title">Page not found</h1>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/sign-in" element={<SignIn/>}/>
                    <Route path="/sign-up" element={<SignUp/>}/>
                    <Route path="/orders" element={<Orders/>}/>
                    <Route path="/product/:id" element={<ProductDetail/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="/confirm-order/:orderId" element={<ConfirmOrder/>}/>
                </Routes>
            </BrowserRouter>
        </BaseContext>
    );
}

