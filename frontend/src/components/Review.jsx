import React from "react";
import {UserIcon} from "@heroicons/react/24/outline/index.js";

export default function Review({review}) {
    return (
        <div className="card">
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <UserIcon className="icon is-large"/>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">{review.attributes?.user?.data?.attributes?.username}</p>
                        <p className="subtitle is-6">{review.attributes?.user?.data?.attributes?.email}</p>
                    </div>
                </div>
                <p className="content">{review.attributes?.body}</p>
            </div>
        </div>
    );
}
