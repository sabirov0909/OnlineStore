import React, {useContext, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {SIGN_UP} from "../utils/urls.js";
import {Context} from "../components/BaseContext.jsx";

export default function SignUp() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const {setUser, setToken} = useContext(Context)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        if (password !== confirmPassword) alert("Passwords do not match")
        else {
            axios.post(SIGN_UP, {username: username, email: email, password: password})
                .then(res => {
                    setUser(res.data.user)
                    setToken(res.data.jwt)
                    navigate("/")
                    alert("Successfully signed up")
                })
                .catch(err => {
                    console.error(err)
                    alert("Something went wrong")
                })
        }
    }


    return (
        <div className="columns is-vcentered is-centered sign">
            <div className="column is-4">
                <div className="box">
                    <h1 className="title">Sign Up</h1>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="field">
                            <input
                                minLength={4}
                                required
                                type="text"
                                className="input"
                                placeholder="Enter username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <input
                                required
                                type="email"
                                className="input"
                                placeholder="Enter email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <input
                                required
                                minLength={6}
                                type="password"
                                className="input"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <input
                                required
                                minLength={6}
                                type="password"
                                className="input"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="field">
                            <button className='button is-fullwidth is-primary is-dark'>Submit</button>
                        </div>
                        <div className="field">
                            <Link to="/sign-in" className='button is-fullwidth is-link is-dark'>
                                To Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
