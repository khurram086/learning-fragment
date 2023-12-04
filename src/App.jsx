import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  
  letfoodItems=["Dal","Green Vegetable","Roti","Salad","Milk"];

  return (
  <>
      <h1>Healthy Food</h1>
  <ul class="list-group">
    {foodItems.map((item) => (
    <li class="list-group-item">{item}</li>
    ))}
  
</ul>
</>
  );
}

export default App
