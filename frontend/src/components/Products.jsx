import React from 'react';
import Product from "./Product.jsx";

export default function Products({products}) {
    return (
        <div className="columns is-multiline">
            {products.map(product => (
                <div className="column is-4" key={product.id}>
                    <Product product={product}/>
                </div>
            ))}
        </div>
    );
}


