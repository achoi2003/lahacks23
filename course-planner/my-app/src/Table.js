import React, {useState} from "react";

function Table(props) {  
  return (
<div>

{/* start of the Academic Year */}
<div className = "header"> <h3> Year 1 </h3></div>
<div className="flex-container"> 

{/* One quarter  */}
    <div> 
          <div className = "flex-table">
            <div> <h4> Fall </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            </div>
    </div>

    {!props.quarters &&
         <div> 
          <div className = "flex-table">
          <div> <h4> Winter </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>
    }
        <div> 
          <div className = "flex-table">
          <div> <h4> Spring </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 

    {!props.summer &&
        <div> 
          <div className = "flex-table">
          <div> <h4> Summer </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 
    }
    </div>
        <div className = "header"> <h5> Year 2 </h5></div>
        <div className="flex-container">
        
        {/* One Quarter */}
        <div> 
          <div className = "flex-table">
            <div> <h4> Fall </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>

        {!props.quarters &&
         <div> 
          <div className = "flex-table">
          <div> <h4> Winter </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>
        }

        <div> 
          <div className = "flex-table">
          <div> <h4> Spring </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 

        {!props.summer &&
        <div> 
          <div className = "flex-table">
          <div> <h4> Summer </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 
        }
        </div>

        <div className = "header"> <h5> Year 3 </h5></div>
        <div className="flex-container">
        
        {/* One Quarter */}
        <div> 
          <div className = "flex-table">
            <div> <h4> Fall </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>

         {!props.quarters &&
         <div> 
          <div className = "flex-table">
          <div> <h4> Winter </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>
        }

        <div> 
          <div className = "flex-table">
          <div> <h4> Spring </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 

        {!props.summer &&
        <div> 
          <div className = "flex-table">
          <div> <h4> Summer </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 
        }
        </div>
 
        {props.years >=4 && 
       <div>
        <div className = "header"> <h5> Year 4 </h5></div>
        <div className="flex-container">
        
        <div> 
          <div className = "flex-table">
            <div> <h4> Fall </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>

         {!props.quarters &&
         <div> 
          <div className = "flex-table">
          <div> <h4> Winter </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>
        }

        <div> 
          <div className = "flex-table">
          <div> <h4> Spring </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>  

         {!props.summer &&
        <div> 
          <div className = "flex-table">
          <div> <h4> Summer </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 
         }
        </div> 
        </div> 
        }

    {props.years >=5 && 
       <div>
        <div className = "header"> <h5> Year 5 </h5></div>
        <div className="flex-container">
        
        <div> 
          <div className = "flex-table">
            <div> <h4> Fall </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>

         {!props.quarters &&
         <div> 
          <div className = "flex-table">
          <div> <h4> Winter </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>
        }

        <div> 
          <div className = "flex-table">
          <div> <h4> Spring </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div>  

         {!props.summer &&
        <div> 
          <div className = "flex-table">
          <div> <h4> Summer </h4> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
            <div> <input type="text"/> </div>
          </div>
         </div> 
         }
        </div> 
        </div> 
        }

     </div>
    );
}

export default Table;