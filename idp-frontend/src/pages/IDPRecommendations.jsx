import React from "react";
import Card from "../components/Card";
import "../App.css";

function IDPRecommendations() {
  const recommendations = [
    { title: "ML Basics", value: "Beginner" },
    { title: "React Advanced", value: "Intermediate" },
    { title: "Data Analysis Project", value: "Project" }
  ];

  return (
    <div className="page-container">
      <h2>Your Recommended IDP</h2>
      <div className="card-container">
        {recommendations.map((rec, index) => (
          <Card key={index} title={rec.title} value={rec.value} />
        ))}
      </div>
    </div>
  );
}

export default IDPRecommendations;
