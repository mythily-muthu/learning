import React, { useEffect, useState } from "react";
import { fruits } from "../constants/index";

const Fruits = ({ fruits }) => {
  const [allFruits, setAllFruits] = useState(fruits);

  const handleDelete = (fruitToDelete) => {
    let remainingFruits = allFruits.filter((fruit) => fruit !== fruitToDelete);
    setAllFruits(remainingFruits);
  };

  const handleEdit = () => {};

  useEffect(() => {
    setAllFruits(fruits);
  }, [fruits]);

  return (
    <div className="flex h-max bg-blue-100 border w-80 ">
      <div className="flex flex-col gap-3 p-10 w-full">
        {allFruits.map((fruit, index) => (
          <div
            className="flex justify-between w-full hover:bg-white"
            key={index}
          >
            <p className="font-bold items-start hover:cursor-pointer ">
              {fruit}
            </p>
            <p
              onClick={() => handleDelete(fruit)}
              className="font-bold text-red-700 hover:cursor-pointer hover:text-red-500"
            >
              D
            </p>
            <p
              onClick={() => handleEdit(fruit)}
              className="font-bold text-red-700 hover:cursor-pointer hover:text-red-500"
            >
              E
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
