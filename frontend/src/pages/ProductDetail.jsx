import React, {useContext, useEffect, useState} from 'react';
import Layout from "../components/Layout.jsx";
import AddReview from "../components/AddReview.jsx";
import Reviews from "../components/Reviews.jsx";
import {useParams} from "react-router-dom";
import {load} from "../utils/service.js";
import {PRODUCT, REVIEWS_OF_PRODUCT} from "../utils/urls.js";
import ProductDiscount from "../components/ProductDiscount.jsx";
import ProductImage from "../components/ProductImage.jsx";
import ProductHeader from "../components/ProductHeader.jsx";
import {Context} from "../components/BaseContext.jsx";
import {addToCart} from "../utils/cart.js";

export default function ProductDetail() {
    const [product, setProduct ] = useState(null)
    const {isAuthenticated} = useContext(Context)
    const [reviews,setReviews] = useState([])
    const {cart,setCart} = useContext(Context)
    const params = useParams()


    function loadReviews() {
        load(REVIEWS_OF_PRODUCT.replace("productId", params.id), setReviews)
    }
    useEffect(() => {
        load(PRODUCT.replace('id', params.id), setProduct)
        loadReviews()
    }, []);

    if (!product) return <Layout><h1 className="title">Product not found</h1></Layout>
    return (
        <Layout>
            <div className="fixed-grid">
                <div className="grid">
                    <div className="cell box">
                      <ProductImage image={product.attributes.image}/>
                    </div>
                    <div className="cell box" style={{position: "relative"}}>
                        <ProductHeader isNew={product.attributes.isNew} discount={product.attributes.discount}/>
                        <br/>
                        <h1 className="title">{product.attributes.name}</h1>
                        <p>{product.attributes.description}</p>
                        <br/>
                        <ProductDiscount price={product.attributes.price} discount={product.attributes.discount}/>
                        <button className="button is-primary is-dark ml-3" onClick={() => addToCart(cart,setCart,product)}>Add to cart</button>
                        <hr/>
                        {isAuthenticated && <AddReview loadReviews={loadReviews} product={product}/>}
                    </div>
                    <div className="cell box is-col-span-2">
                        <Reviews reviews={reviews}/>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
