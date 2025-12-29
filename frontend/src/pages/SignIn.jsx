import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {SIGN_IN} from "../utils/urls.js";
import {Context} from "../components/BaseContext.jsx";

export default function SignIn(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword]= useState("")

    const {setUser, setToken}  = useContext(Context)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(SIGN_IN, {
            identifier: username,
            password: password
        }).then(res => {
            alert("Successfully signed in")
            setUser(res.data.user)
            setToken(res.data.jwt)
            navigate("/")
        }).catch(err => {
          alert("Invalid username or password")
        })
    }

    return (
        <div className="columns is-vcentered is-centered sign">
            <div className="column is-4">
                <div className="box">
                    <h1 className="title">Sign in</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="field">
                            <input
                                type="text"
                                className="input"
                                placeholder="Enter username"
                                onChange={e => setUsername(e.target.value)}
                                value={username}
                            />
                        </div>
                        <div className="field">
                            <input
                                type="password"
                                className="input"
                                placeholder="Enter password"
                                onChange={e => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <div className="field">
                            <button className='button is-fullwidth is-primary is-dark'>Submit</button>
                        </div>
                        <div className="field">
                            <Link to="/sign-up" className='button is-fullwidth is-link is-dark'>
                                To registration
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

