import React, {useContext} from 'react';
import {UserIcon} from "@heroicons/react/24/outline/index.js";
import {Link} from "react-router-dom";
import {Context} from "./BaseContext.jsx";
import {getCartCount} from "../utils/cart.js";

export default function Menu() {
    const {user, isAuthenticated, setToken, setUser, cart} = useContext(Context)

    function logOut () {
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        setToken(null)
        setUser(null)
    }
    return (
        <div className="section" style={{borderRight: "1px solid #dbdbdb", minHeight: "98vh"}}>
            <div className="has-text-centered">
                <h1 className="title is-4">
                    <Link to="/">Online Store</Link>
                </h1>

                {isAuthenticated ? <>
                    <i className="icon is-large">
                        <UserIcon/>
                    </i>
                    <h1 className="heading">{user.username}</h1>
                    <p className="has-text-grey is-size-7">{user.email}</p>
                </> : ""}
            </div>
            <hr/>
            <aside className="menu">
                <ul className="menu-list">
                    <li><Link to="/cart">Cart | <span className="tag is-primary">{getCartCount(cart)}</span></Link></li>
                    <li><Link to="/orders">Orders</Link></li>
                    {isAuthenticated ? <li><a className="has-text-danger" onClick={logOut}>Log out</a></li> :
                        <li><Link to="/sign-in">Log in</Link></li>}
                </ul>
            </aside>
        </div>
    );
}


