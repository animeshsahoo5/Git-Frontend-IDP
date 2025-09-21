import React, { useState } from "react";
import "../App.css";

function SkillAssessment() {
  const [skills, setSkills] = useState([{ skill: "", level: "" }]);

  const handleChange = (index, event) => {
    const newSkills = [...skills];
    newSkills[index][event.target.name] = event.target.value;
    setSkills(newSkills);
  };

  const addSkill = () => setSkills([...skills, { skill: "", level: "" }]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(skills);
  };

  return (
    <div className="page-container">
      <h2>Skill Assessment</h2>
      <form onSubmit={handleSubmit}>
        {skills.map((item, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              name="skill"
              placeholder="Skill Name"
              value={item.skill}
              onChange={(e) => handleChange(index, e)}
              required
            />
            <input
              type="number"
              name="level"
              placeholder="Skill Level (0-100)"
              value={item.level}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addSkill}>Add Skill</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SkillAssessment;
