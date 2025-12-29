import React, {useContext, useState} from 'react';
import axios from "axios";
import {REVIEWS} from "../utils/urls.js";
import {Context} from "./BaseContext.jsx";

export default function AddReview({product, loadReviews}) {
    const {user} = useContext(Context)
    const [body, setBody] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        setLoading(true)
        axios.post(REVIEWS, {
            data: {
                body: body,
                user: user,
                product: product

            }
        }).then(res => {
            console.log(res.data)
            loadReviews()
            setBody('')
        })
            .catch(err => {
                alert("Something went wrong")
                console.log(err)
            })
            .finally(() => setLoading(false))
    }

    return (
        <div>
            <h1 className="title is-4">Add review</h1>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <textarea
                        value={body}
                        onChange={e => setBody(e.target.value)}
                        className="textarea"
                        required
                    />
                </div>
                <div className="field">
                    <button
                        disabled={loading}
                        className="button is-info is-dark is-fullwidth">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

