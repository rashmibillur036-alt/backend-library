import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Signin.css";
import { useNavigate,Link } from "react-router-dom";

const Signin = () => {
  const [Student_name, setStudent_name] = useState("");
  const [Student_ID, setStudent_ID] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate();

  const signin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signin", {
        Student_name,
        Student_ID,
        password
      });

      alert(response.data.message);
    } catch (error) {
      alert("Signup failed!");
      console.log(error);
    }
  };

  return (
    <div className="signin-background">
      <div className="signin-container">
        <h1>Signin</h1>

        <label>Student Name:</label>
        <input
          type="text"
          placeholder="Enter your Student Name"
          onChange={(e) => setStudent_name(e.target.value)}
        />

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

        <button onClick={signin}>Signin</button>

        <p>
          Already have an account?{" "}
          <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;