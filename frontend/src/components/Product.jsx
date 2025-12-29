import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import ProductImage from "./ProductImage.jsx";
import ProductHeader from "./ProductHeader.jsx";
import ProductDiscount from "./ProductDiscount.jsx";
import {Context} from "./BaseContext.jsx";
import {addToCart, getCountOfProduct} from "../utils/cart.js";

export default function Product({product}) {
    const {cart, setCart} = useContext(Context)

    console.log(cart)

    if (!product) return null
    return (
        <div className="card">
            <div className="card-image" style={{position: "relative"}}>
                <ProductHeader isNew={product.attributes.isNew} discount={product.attributes.discount}/>
                <figure className="image is-4by3">
                    <ProductImage image={product.attributes.image}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="has-text-centered">
                    <Link to={`/product/${product.id}`}>
                        <h1 className="title is-5 my-0 is-underlined">{product.attributes.name}</h1>
                    </Link>
                    <h1 className="heading">{product.attributes.brand.data.attributes.title}</h1>
                </div>
                <hr/>
                <div className="columns is-justify-content-space-between">
                    <ProductDiscount price={product.attributes.price} discount={product.attributes.discount}/>
                    <button
                        className={`button ${getCountOfProduct(cart, product.id)?"is-primary  is-dark":""}`}
                        onClick={() => addToCart(cart, setCart, product)}
                    >To Cart &nbsp; {getCountOfProduct(cart, product.id) ?  ( <span className="tag">{getCountOfProduct(cart, product.id)}</span>) : ""}</button>
                </div>
            </div>
        </div>
    );
}


