import React, {useState} from "react"; 

function Dropdown(props) {
    const [selectedOption, setSelectedOption] = useState(null);
  
    function handleOptionChange(event) {
      setSelectedOption(event.target.value);
      props.onChange(event.target.value);
    }
  
    return (
      <select value={selectedOption} onChange={handleOptionChange}>
        {props.options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }

export default Dropdown;