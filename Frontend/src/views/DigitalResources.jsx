import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DigitalResources.css";

const DigitalResources = () => {
  const navigate = useNavigate();

  const resources = [
    { title: "React Basics eBook", type: "PDF" },
    { title: "Data Structures Notes", type: "PDF" },
    { title: "Python Programming Course", type: "Video" },
    { title: "AI Research Paper", type: "PDF" },
    { title: "CSS Complete Guide", type: "PDF" },
    { title: "Java Tutorial Series", type: "Video" },
  ];

  return (
    <div className="digital-page">

      {/* HEADER */}
      <header className="digital-header">
        <h1>💻 Digital Resources</h1>
        <button className="back-btn" onClick={() => navigate("/library")}>
          ⬅ Back to Library
        </button>
      </header>

      {/* GRID OF CARDS */}
      <div className="digital-grid">
        {resources.map((resource, index) => (
          <div className="digital-card" key={index}>
            <h3>{resource.title}</h3>
            <p>Type: {resource.type}</p>
            <button>Access</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DigitalResources;