import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Temporary: just console log, replace with API later
        console.log({ email, password });
        // Navigate to dashboard after login
        navigate("/dashboard");
    };

    return (
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        </div>
        <div className="form-group">
        <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </div>
        <button type="submit" className="center">Login</button>
    </form>
    </div>
);
}

export default Login;
