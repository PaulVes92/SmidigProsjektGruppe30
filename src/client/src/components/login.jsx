import React, { Component } from "react";
import { Link } from 'react-router-dom'


class Login extends React.Component {

    render() {
        return (
            <div>
                <form>
                    <input
                        className="formInput"
                        type="email"
                        name="email"
                        placeholder="Email"
                    />

                    <input
                        className="formInput"
                        type="password"
                        name="password"
                        placeholder="Password"
                    />

                    <Link id="loginBtn" to="/customers">Login</Link>

                </form>
            </div>
        );
    }
}

export default Login;