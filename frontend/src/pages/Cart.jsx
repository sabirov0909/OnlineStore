import React, {useContext} from 'react';
import Layout from "../components/Layout.jsx";
import CartItem from "../components/CartItem.jsx";
import {Context} from "../components/BaseContext.jsx";
import {decrease, increase} from "../utils/cart.js";

export default function Cart() {
    const {cart,setCart} = useContext(Context)
    if (cart?.length === 0) return <Layout>
        <h1 className="title is-5 has-text-danger has-text-centered">Cart is empty</h1>
    </Layout>

    return (
        <Layout>
        <h1 className="title is-5">Cart</h1>
            <div className="cart-items">
                {cart.map(item => (
                    <CartItem
                        increase={() => increase(cart, setCart, item)}
                        decrease={() => decrease(cart, setCart, item)}
                        key={item.product.id}
                        cartItem={item}
                    />
                ))}
            </div>
        </Layout>
    );
}
