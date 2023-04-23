import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

// function NumberInput() {
//   const [number, setNumber] = useState('');

//   function handleChange(event) {
//     setNumber(event.target.value);
//   }

//   return (
//     <div>
//         <input type="number" value={number} onChange={handleChange} />
//       <p>The number you entered is: {number}</p>
//     </div>
//   );
//   }


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class = "title"> <h2> College Degree Planner</h2> </div>

        {/* start of the Academic Year */}
        <div class = "header"> <h5> Year 1 </h5></div>
        <div class="flex-container">
        
        {/* One Quarter */}
        <div> 
          <div class = "flex-table">
            <div> <h4> Fall </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>

         <div> 
          <div class = "flex-table">
          <div> <h4> Winter </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>

        <div> 
          <div class = "flex-table">
          <div> <h4> Spring </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 

        <div> 
          <div class = "flex-table">
          <div> <h4> Summer </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 
        </div>


        <div class = "header"> <h5> Year 2 </h5></div>
        <div class="flex-container">
        
        {/* One Quarter */}
        <div> 
          <div class = "flex-table">
            <div> <h4> Fall </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>

         <div> 
          <div class = "flex-table">
          <div> <h4> Winter </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>

        <div> 
          <div class = "flex-table">
          <div> <h4> Spring </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 

        <div> 
          <div class = "flex-table">
          <div> <h4> Summer </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 
        </div>


        <div class = "header"> <h5> Year 3 </h5></div>
        <div class="flex-container">
        
        {/* One Quarter */}
        <div> 
          <div class = "flex-table">
            <div> <h4> Fall </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>

         <div> 
          <div class = "flex-table">
          <div> <h4> Winter </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>

        <div> 
          <div class = "flex-table">
          <div> <h4> Spring </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 

        <div> 
          <div class = "flex-table">
          <div> <h4> Summer </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 
        </div>


        <div class = "header"> <h5> Year 4 </h5></div>
        <div class="flex-container">
        
        {/* One Quarter */}
        <div> 
          <div class = "flex-table">
            <div> <h4> Fall </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>

         <div> 
          <div class = "flex-table">
          <div> <h4> Winter </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>

        <div> 
          <div class = "flex-table">
          <div> <h4> Spring </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 

        <div> 
          <div class = "flex-table">
          <div> <h4> Summer </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 
        </div>


      </header>
    </div>
  );
}

export default App;
