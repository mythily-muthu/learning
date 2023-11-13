import React, { useState } from "react";
import Fruits from "../components/Fruits";
import { fruits } from "../constants";
const Home = () => {
  const [newFruit, setNewFruit] = useState("");
  const [fruitsList, setfruitsList] = useState(fruits);

  const handleInputChange = (e) => {
    setNewFruit(e.target.value);
  };

  const handleAddFruit = () => {
    // checking wether the entered fruit is not empty
    if (newFruit.trim() !== "") {
      setfruitsList([...fruitsList, newFruit.trim()]);
      setNewFruit("");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-50 ">
      <div className="flex gap-7 p-4 m-5">
        <input
          placeholder="Enter a fruit..."
          className="py-2 px-4 border"
          type="text"
          value={newFruit}
          onChange={handleInputChange}
        />
        <button
          className="flex items-center font-semibold text-lg"
          onClick={handleAddFruit}
        >
          Add
        </button>
      </div>
      <Fruits fruits={fruitsList} />
    </div>
  );
};

export default Home;
