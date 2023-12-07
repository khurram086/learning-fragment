import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  let foodItems=["Dal","Green Vegetable","Roti","Salad","Milk"];
  // let foodItems=[];

  if (foodItems.length===0){
    return <h3>I am Still Hungry.</h3>;
  }
  // let emptyMessage=foodItems.length===0 ? <h3>I am very hungry.</h3> : <h3>Array has no Value.</h3>;
  return (
  <>
      <h1>Healthy Food</h1>
  <ul className="list-group">
    {foodItems.map((item) => (
    <li key={item} className="list-group-item">{item}</li>
    ))}
  
</ul>
</>
  );
}

export default App
