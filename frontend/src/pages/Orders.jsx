import React, { useContext, useEffect, useState } from 'react';
import Layout from "../components/Layout.jsx";
import { load } from "../utils/service.js";
import { ORDERS_OF_USER } from "../utils/urls.js";
import { Context } from "../components/BaseContext.jsx";

export default function Orders() {
    const { user } = useContext(Context);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (user) {
            load(ORDERS_OF_USER.replace("userId", user.id), setOrders);
        }
    }, [user]);

    return (
        <Layout>
            <h1 className="title is-4">Orders</h1>
            {user ? (
                <table className="table is-fullwidth is-hoverable">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Total</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>${order.attributes.total}</td>
                                <td>Pending...</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Загрузка или пользователь не найден.</p>
            )}
        </Layout>
    );
}
