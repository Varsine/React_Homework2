import React from "react";
import ChildComponent from "./ChildComponent";

const MainComponent = () => {
  const user = { name: "Hakob", age: 22 };
  const products = ["Milk", "Bread", "Apple"];

  return (
    // className-ը այսիսի անուն չպետք է ունենա
    <div className="p-4 border rounded-2xl shadow-md">
      <h2>Main Component (Parent)</h2>
      <ChildComponent user={user} products={products} />
    </div>
  );
};

export default MainComponent;
