import axios from "axios";
import React, { useEffect, useState } from "react";

function Fruits() {
  const [fruits, setFruits] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:4000/fruits").then((res) => {
      setFruits(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <p className="text-4xl">
        {fruits.map((fruit) => {
          return <div key={fruit.id}>{fruit.name}</div>;
        })}
      </p>
    </div>
  );
}

export default Fruits;
