import React from 'react';
import {BASE_URL} from "../utils/urls.js";

export default function ProductImage({image}) {
    if (!image.data) return <img
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        alt="Placeholder image"
        style={{objectFit: "cover"}}
    />
   return <img src={BASE_URL + image.data.attributes.url} alt="Product image" style={{objectFit: "cover"}}/>
}

