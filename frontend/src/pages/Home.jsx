import React, {useContext, useEffect, useState} from 'react';
import Layout from "../components/Layout.jsx";
import Products from "../components/Products.jsx";
import {BRANDS, CATEGORIES, PRODUCTS} from "../utils/urls.js";
import {load} from "../utils/service.js";
import {Context} from "../components/BaseContext.jsx";

export default function Home() {
    const [brands, setBrands] = useState([]);
    const [categories, setCategories] = useState([]);
    const {products, setProducts} = useContext(Context);

    useEffect(() => {
        load(BRANDS, setBrands)
        load(CATEGORIES, setCategories)
        load(PRODUCTS, setProducts)
    }, []);


    return (
        <Layout brands={brands} categories={categories}>
            <Products products={products}/>
        </Layout>
    );
}


