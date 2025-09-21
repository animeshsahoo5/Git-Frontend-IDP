import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Dashboard from "./pages/Dashboard";
import SkillAssessment from "./pages/SkillAssessment";
import GoalSetting from "./pages/GoalSetting";
import IDPRecommendations from "./pages/IDPRecommendations";
import Login from "./pages/Login";  // new import

import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Login />} />  {/* default to login */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/skills" element={<SkillAssessment />} />
          <Route path="/goals" element={<GoalSetting />} />
          <Route path="/idp" element={<IDPRecommendations />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
