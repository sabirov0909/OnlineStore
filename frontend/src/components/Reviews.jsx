import React from "react";
import Review from "./Review.jsx";

export default function Reviews({reviews}) {

    if (!reviews || !reviews.length ) return <h1 className="title has-text-centered">No reviews yet</h1>

    return (
        <div>
            <h1 className="title has-text-centered">Reviews</h1>
            <div className="columns is-multiline">
                {reviews.map(review => (
                    <div className="column is-6" key={review.id}>
                        <Review review={review}/>
                    </div>
                ))}
            </div>
        </div>
    );
}
