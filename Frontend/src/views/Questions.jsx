import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Questions.css";

const Questions = () => {
  const navigate = useNavigate();

  const questionBanks = [
    { title: "Data Structures QP", years: "2019 - 2023" },
    { title: "Operating Systems QP", years: "2018 - 2022" },
    { title: "Database Management QP", years: "2017 - 2023" },
    { title: "Computer Networks QP", years: "2019 - 2024" },
    { title: "Python Programming QP", years: "2020 - 2023" },
    { title: "Algorithms QP", years: "2018 - 2023" },
  ];

  return (
    <div className="questions-page">

      {/* HEADER */}
      <header className="questions-header">
        <h1>📝 Question Bank</h1>
        <button className="back-btn" onClick={() => navigate("/library")}>
          ⬅ Back to Library
        </button>
      </header>

      {/* GRID CARDS */}
      <div className="questions-grid">
        {questionBanks.map((item, index) => (
          <div className="question-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.years}</p>
            <button>View Paper</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Questions;