import React from "react";
import Card from "../components/Card";
import "../App.css";

function Dashboard() {
    const stats = [
    { title: "Completed Tasks", value: 12 },
    { title: "Pending IDPs", value: 3 },
    { title: "Skills Acquired", value: 8 }
];

return (
    <div className="page-container">
    <h2>Dashboard</h2>
    <div className="card-container">
        {stats.map((stat, index) => (
        <Card key={index} title={stat.title} value={stat.value} />
        ))}
    </div>
    </div>
);
}

export default Dashboard;
