import './App.css';
import React, {useState} from "react";
import Table from "./Table";

function App() {
  // quarter(0) or semester(1)?
  const [quarters, setQuarters] = useState(0);
  // summer(0) or no(1)?
  const [summer, setSummer] = useState(0);
  // 3, 4, or 5 years?
  const [years, setYears] = useState(3); 

  // get the value of the selected option 
  // dynamically update the state variable
function handleQuartersChange(event) {
  const value = parseInt(event.target.value);
  console.log('New quarters value:', value);
  setQuarters(value);
  // setQuarters(Number(event.target.value));
}
function handleSummerChange(event) {
  const value = parseInt(event.target.value);
  console.log('New summer value:', value);
  setSummer(value);
  // setSummer(Number(event.target.value));
}
function handleYearsChange(event) {
  const value = parseInt(event.target.value);
  console.log('New years value:', value);
  setYears(value);
  // setYears(Number(event.target.value));
}
  return (
    <div className="App">
      <header className="App-header">
    
      <div className = "title"> <h2> College Degree Planner</h2> </div>


<p style={{ marginTop: '0px' }}>
        <label className="dropdown-label" style={{ marginTop: '0' }}>
        Quarter or Semester System:
        <select value={quarters} onChange={handleQuartersChange}>
          <option value="0">Quarter</option>
          <option value="1">Semester</option>
        </select>
      </label>
          
      <label className="dropdown-label">
        Include Summer:
        <select value={summer} onChange={handleSummerChange}>
          <option value="0">Yes</option>
          <option value="1">No</option>
        </select>
      </label>
  
      <label className="dropdown-label">
      3, 4 or 5 years:
        <select value={years} onChange={handleYearsChange}>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </label>
      </p>

      <Table quarters={quarters} summer={summer} years={years} 
      />
      </header>
    </div>
  );
}

export default App;
