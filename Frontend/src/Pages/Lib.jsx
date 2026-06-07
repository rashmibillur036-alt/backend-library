import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Lib.css";

const Lib = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("key");

  useEffect(() => {
    if (!token) navigate("/");
  }, [token, navigate]);

  const logout = () => {
    localStorage.removeItem("key");
    navigate("/");
  };

  return (
    <div className="lib-container">

      {/* NAVBAR */}
      <header className="navbar">
        <h1 className="title">College Library</h1>
        <div className="nav-links">
          <button onClick={() => navigate("/home")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
          <button className="logout" onClick={logout}>Logout</button>
        </div>
      </header>

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-text">
          <h2 className="animated-text">Welcome to College Library 📚</h2>
          <p>Explore books, journals, digital resources & question bank</p>
        </div>

        {/* CARDS */}
        <div className="cards-on-hero">
          <div className="card">
            <h3>📚 Books</h3>
            <p>Access academic and fiction books.</p>
            {/* Navigate to /books page */}
            <button onClick={() => navigate("/books")}>View Books</button>
          </div>

          <div className="card">
            <h3>📰 Journals</h3>
            <p>Research journals and publications.</p>
            <button onClick={() => navigate("/journals")}>View Journals</button>
          </div>

          <div className="card">
            <h3>💻 Digital Resources</h3>
            <p>Online learning materials & eBooks.</p>
            <button onClick={() => navigate("/digital")}>Explore</button>
          </div>

          <div className="card">
            <h3>📝 Question Bank</h3>
            <p>Practice previous year question papers.</p>
            <button onClick={() => navigate("/questions")}>Start Practice</button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-section">
          <h4>ABOUT</h4>
          <p>Contact Us</p>
          <p>Careers</p>
        </div>

        <div className="footer-section">
          <h4>HELP</h4>
          <p>Payments</p>
          <p>Shipping</p>
          <p>FAQ</p>
        </div>

        <div className="footer-section">
          <h4>POLICIES</h4>
          <p>Terms of Use</p>
          <p>Privacy</p>
          <p>Sitemap</p>
        </div>

        <div className="footer-section">
          <h4>SOCIAL</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>

        <div className="footer-section">
          <h4>CONTACT</h4>
          <p>Email: library@college.edu</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: College Library, City, State, India</p>
        </div>
      </footer>

    </div>
  );
};

export default Lib;