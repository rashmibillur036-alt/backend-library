import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Journals.css";

const Journals = () => {
  const navigate = useNavigate();

  const journals = [
    { title: "Journal of AI Research", volume: "Vol. 45, 2025" },
    { title: "Computer Science Review", volume: "Vol. 10, 2024" },
    { title: "Network Systems Journal", volume: "Vol. 8, 2025" },
    { title: "Data Science Insights", volume: "Vol. 12, 2023" },
    { title: "Machine Learning Quarterly", volume: "Vol. 5, 2024" },
    { title: "Cybersecurity Today", volume: "Vol. 3, 2025" },
  ];

  return (
    <div className="journals-page">
      {/* HEADER */}
      <header className="journals-header">
        <h1>📰 Research Journals</h1>
        <button className="back-btn" onClick={() => navigate("/library")}>
          ⬅ Back to Library
        </button>
      </header>

      {/* JOURNALS GRID */}
      <div className="journals-grid">
        {journals.map((journal, index) => (
          <div className="journal-card" key={index}>
            <h3>{journal.title}</h3>
            <p>{journal.volume}</p>
            <button>Read Journal</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journals;