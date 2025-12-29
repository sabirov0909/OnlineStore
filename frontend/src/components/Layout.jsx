import React from 'react';
import Navbar from "./Navbar.jsx";
import Menu from "./Menu.jsx";

export default function Layout({children, brands, categories}) {
    return (
        <div className="columns">
            <div className="column is-2">
                <Menu/>
            </div>
            <div className="column">
                <Navbar categories={categories} brands={brands}/>
                <div className="section">
                    {children}
                </div>
            </div>

        </div>
    );
}


