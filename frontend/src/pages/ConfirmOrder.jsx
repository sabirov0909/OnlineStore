import React, {useContext, useEffect, useState} from 'react';
import Layout from "../components/Layout.jsx";
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {load} from "../utils/service.js";
import {ORDER_PRODUCT, ORDERS} from "../utils/urls.js";
import axios from "axios";
import {Context} from "../components/BaseContext.jsx";


export default function ConfirmOrder() {
    const params = useParams()
    const navigate = useNavigate()
    const [orderProduct, setOrderProduct] = useState(null)
    const {isAuthenticated, user} = useContext(Context)
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const deleteOrderProduct = () => {
        axios.delete(ORDER_PRODUCT.replace('id', params.orderId))
            .then(res => navigate(`/product/${res.data.data.attributes.product.data.id}`))
            .catch(err => console.error(err))
    }
    const createOrder = (e) => {
        e.preventDefault()
        const data = {
            user: user,
            address: address,
            phone: phone,
            order_products: orderProduct.id,
            total: orderProduct.attributes.total
        }

        axios.post(ORDERS, {data})
            .then(() => navigate('/orders'))
            .catch(err => console.error(err))
    }

    useEffect(() => {
        load(ORDER_PRODUCT.replace('id', params.orderId), setOrderProduct)
    }, []);

    if (!isAuthenticated) return <Navigate to="/sign-in"/>
    if (!orderProduct) return <Layout><h1 className="title">Order not found</h1></Layout>
    return (
        <Layout>
            <div className="columns">
                <div className="column is-6">
                    <div className="box">
                        <h1 className="title is-4 has-text-centered">Shipping information</h1>
                        <form className="form" onSubmit={createOrder}>

                            <div className="field">
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="Enter your phone number"
                                    value={phone}
                                    required
                                    onChange={e => setPhone(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <textarea
                                    className="textarea"
                                    placeholder="Enter your address"
                                    value={address}
                                    required
                                    onChange={e => setAddress(e.target.value)}
                                ></textarea>
                            </div>
                            <div className="field">
                                <button className="button is-info is-dark is-fullwidth">Confirm</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="column">
                    <div className="box">
                        <h1 className="title">{orderProduct.attributes.product.data.attributes.name}</h1>
                        <h1 className="title">Total: ${orderProduct.attributes.total}</h1>
                        <p>Amount: {orderProduct.attributes.amount}</p>

                        <br/>
                        <button className="button is-danger is-dark" onClick={deleteOrderProduct}>Back to product
                        </button>
                    </div>

                </div>
            </div>
        </Layout>
    );
}

