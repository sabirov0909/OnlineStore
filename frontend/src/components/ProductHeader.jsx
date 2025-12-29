import React from 'react';

export default function ProductHeader({isNew, discount}) {
    return (
        <>
            {isNew ? <span
                className="tag is-primary has-text-weight-bold"
                style={{position: "absolute", zIndex: 5, left: "10px", top: "10px"}}>
                    new
                </span> : ""}

            {+discount ? <span className="tag is-danger has-text-weight-bold"
                               style={{position: "absolute", zIndex: 5, right: "10px", top: "10px"}}>
                    sale {discount}%
                </span> : ""}
        </>
    );
}

