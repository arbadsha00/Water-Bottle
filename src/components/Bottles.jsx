import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  return (
    <div className=" container mx-auto my-16">
      <div className="divider">
        <h3 className="font-bold text-3xl">Available Bottles</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
