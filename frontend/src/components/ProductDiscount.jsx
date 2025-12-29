import React from 'react';
import {discountedPrice} from "../utils/price.js";

function ProductDiscount({price, discount}) {
    if (!+discount) return <span className="tag is-large has-text-weight-bold">${price}</span>
    return (
        <div className="tag is-large has-text-weight-bold">
            <span className="has-text-success is-size-4 ">${discountedPrice(price, discount)}</span>
            <span className="has-text-danger is-size-7 ml-3" style={{textDecoration: "line-through"}}>${price}</span>
        </div>
    );
}

export default ProductDiscount;
