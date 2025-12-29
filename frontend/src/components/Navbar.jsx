import React, {useContext} from 'react';
import {Context} from "./BaseContext.jsx";
import {PRODUCTS} from "../utils/urls.js";
import {load} from "../utils/service.js";

export default function Navbar({categories, brands}) {
    const {setProducts} = useContext(Context)

    function filter(key = "all", value) {
        const url = PRODUCTS + `&filters[${key}][title][$eq]=${value}`
        load(key === "all" ? PRODUCTS : url, setProducts)
    }

    function search(value){
        const url = PRODUCTS + `&filters[name][$containsi]=${value}`
        load(url, setProducts)
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    {brands ? <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Brand
                        </a>
                        <div className="navbar-dropdown">
                            {brands.map(item => (
                                <a
                                    className="navbar-item"
                                    key={item.id}
                                    onClick={() => filter("brand", item.attributes.title)}
                                >
                                    {item.attributes.title}
                                </a>
                            ))}
                        </div>
                    </div> : ""}
                    {categories ? <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            Categories
                        </a>
                        <div className="navbar-dropdown">
                            {categories.map(item => (
                                <a className="navbar-item"
                                   key={item.id}
                                   onClick={() => filter("category", item.attributes.title)}
                                >
                                    {item.attributes.title}
                                </a>
                            ))}
                        </div>
                    </div> : ""}
                    <div className="navbar-item">
                        <button className="button" onClick={() => filter("all")}>All products</button>
                    </div>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control is-expanded">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Find a repository"
                                    onInput={e => search(e.target.value)}
                                />
                            </p>
                            <p className="control">
                                <button className="button is-info">
                                    Search
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}


