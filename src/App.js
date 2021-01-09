import React from "react";
import { Card } from "./components/Card";
import { fakeData } from "./data/planData";
import "./styles.css";



export const App = () => {
  const handleAction = (type) => {
    console.log(type);
  };
  return (
    <div className="App">
      <h1>Find the best plan for you</h1>
      <div>radio</div>
      <div>
        {fakeData.map((data, i) => (
          <Card key={i} {...data} actionButton={handleAction} />
        ))}
      </div>
    </div>
  );
};
