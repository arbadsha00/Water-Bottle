import { useEffect } from "react";
import { useState } from "react";
import Bottle from "./Bottle";
import Cart from "./Cart";
import { addToLS, getCart, removerFromLS } from "../utilities/LS";
const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

   
    useEffect(() => {
        if (bottles.length) {
            const storedCart = getCart();
            const savedCart = [];
            for (const id of storedCart) {
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle)
                    savedCart.push(bottle);
            }
            setCart(savedCart);
        }
    },[bottles])
    
    
    const [cart, setCart] = useState([]);
    function handleAddToCart(bottle){
        setCart([...cart, bottle]);
        addToLS(bottle.id);
}

    function handleRemoveFromCart(bottle) {
        const newArr = cart.filter(item => item !== bottle);
        setCart(newArr);
        removerFromLS(bottle.id);
}

  return (
    <div className=" container mx-auto my-16">
      <div className="divider">
        <h3 className="font-bold text-3xl">Available Bottles</h3>
      </div>
      <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} handleAddToCart={handleAddToCart} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
