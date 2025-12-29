import React, {useContext} from 'react';
import ProductImage from "./ProductImage.jsx";
import ProductDiscount from "./ProductDiscount.jsx";
import {discountedPrice} from "../utils/price.js";
import axios from "axios";
import {ORDER_PRODUCTS} from "../utils/urls.js";
import {useNavigate} from "react-router-dom";
import {Context} from "./BaseContext.jsx";
import {removeFromCart} from "../utils/cart.js";

export default function CartItem({cartItem, increase, decrease}) {
    const {cart, setCart} = useContext(Context)

    const navigate = useNavigate()
    const createOrder = () => {
        const data = {
            product: cartItem.product,
            amount: cartItem.count,
            total:discountedPrice(cartItem.product.attributes.price * cartItem.count, cartItem.product.attributes.discount)
        }
        axios.post(ORDER_PRODUCTS, {data})
            .then(res => {
                removeFromCart(cart,setCart,cartItem)
                navigate(`/confirm-order/${res.data.data.id}`)
            })
            .catch(err => console.error(err))
    }



    return (
        <div className="box columns is-vcentered">
            <div className="column is-2">
                <figure className="image is-64x64">
                 <ProductImage image={cartItem.product.attributes.image}/>
                </figure>
            </div>
            <div className="column is-4">
                <h1 className="title is-4">{cartItem.product.attributes.name}</h1>
            </div>
            <div className="column is-2">
                <ProductDiscount price={cartItem.product.attributes.price * cartItem.count} discount={cartItem.product.attributes.discount}/>
            </div>
            <div className="column is-2">
                <div className="buttons is-centered">
                    <div className="button" onClick={decrease}>-</div>
                    <div className="button is-text">{cartItem.count}</div>
                    <div className="button" onClick={increase}>+</div>
                </div>
            </div>
            <div className="column">
                <button className="button is-primary is-dark is-fullwidth" onClick={createOrder}>Buy</button>
            </div>
        </div>
    );
}

