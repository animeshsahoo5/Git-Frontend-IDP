import React, { useState } from "react";
import "../App.css";

function GoalSetting() {
  const [goals, setGoals] = useState([""]);

  const handleChange = (index, event) => {
    const newGoals = [...goals];
    newGoals[index] = event.target.value;
    setGoals(newGoals);
  };

  const addGoal = () => setGoals([...goals, ""]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(goals);
  };

  return (
    <div className="page-container">
      <h2>Set Your Goals</h2>
      <form onSubmit={handleSubmit}>
        {goals.map((goal, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              placeholder="Enter Goal"
              value={goal}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
        ))}
        <button type="button" onClick={addGoal}>Add Goal</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GoalSetting;
