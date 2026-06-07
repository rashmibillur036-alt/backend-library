import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import "../styles/Login.css";

const Login = () => {
  const [Student_ID, setStudent_ID] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const token = localStorage.getItem('key');
  useEffect(() => {
    if (token) {
      navigate("/library");
    }
  }, [token, navigate]);

  const login = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signup", { Student_ID, password });
      alert(response.data.message);
      localStorage.setItem('key', response.data.token);
      navigate("/library");
    } catch (error) {
      alert("Login failed!");
      console.error(error);
    }
  };

  return (
    <div className="login-background">
      <div className="login-container">
        <h1>Login Page</h1>

        <label>Student ID:</label>
        <input
          type="text"
          placeholder="Enter your Student ID"
          onChange={(e) => setStudent_ID(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={login}>Login</button>

        <p>
          Don't have an account? <Link to="/signin">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;