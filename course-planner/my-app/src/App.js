import logo from './logo.svg';
import './App.css';

function App() {
  const people = ['kevin', 'andy', 'alex'];
  return (
    <div className="App">
      <header className="App-header">
        <div class = "title"> <h1> College Degree Planner</h1> </div>

        {/* start of the Academic Year */}
        <div class = "header"> <h3> Year 1 </h3></div>
        <div class="flex-container">
        
        {/* One Quarter */}
        <div> 
          <div> <h3> Fall </h3> </div>
          <div class = "flex-table">
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> class 2</div>
          </div>
         </div>

         <div> 
          <div> <h3> Winter </h3> </div>
          <div class = "flex-table">
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> class 2</div>
          </div>
         </div>

        <div> 
          <div> <h3> Spring </h3> </div>
          <div class = "flex-table">
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> class 2</div>
          </div>
         </div> 

        <div> 
          <div> <h3> Summer </h3> </div>
          <div class = "flex-table">
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> class 2</div>
          </div>
         </div> 

        </div>



        <div class = "header"> <h3> Year 2 </h3></div>
        <div class="flex-container">
        <div> 
          <div class = "flex-table">
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> class 2</div>
          </div>
         </div>
        <div> Winter </div>
        <div> Spring </div>
        </div>

        <div class = "header"> <h3> Year 3  </h3></div>
        <div class="flex-container">
        <div> Fall </div>
        <div > Winter </div>
        <div> Spring </div>
        </div>

        <div class = "header"> <h3> Year 4  </h3></div>
        <div class="flex-container">
        <div> Fall</div>
        <div > Winter </div>
        <div> Spring </div>
        </div>

      </header>
    </div>
  );
}

export default App;
