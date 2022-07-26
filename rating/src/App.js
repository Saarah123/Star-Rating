import React from "react";
import { useState } from "react";
import {FaStar} from "react-icons/fa";




function App () {
  const [rate,setRate]= useState(null);

  return (
      <>
  <div style={{marginLeft:"28%" , marginTop:"10%"}}>
      {[...Array(5)].map((star,i) =>{
          const Ratings = i +1 ;

 return(
<label>
  <input
  value={Ratings}
  type="radio"
  name="rate"
  onClick={()=>setRate(Ratings)}
  color={"red"}
  visibility="hidden"
  />
 
  <FaStar
  size = {100}
  color ={Ratings <= rate ? "yellow" : "black"}
  />
</label>
 )
})
}
  </div>

</>
)

}
 export default App;