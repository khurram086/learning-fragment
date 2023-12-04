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

<h2>This is the change to check push request</h2>
</>
  );
}

export default App
