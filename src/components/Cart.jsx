const Cart = ({ cart, handleRemoveFromCart,total,handleSubtraction }) => {
  return (
    <div>
      <div>
        <h1 className="text-xl font-semibold flex items-center gap-2">
          Selected Bottles{" "}
          <span className="font-bold bg-green-600 text-white p-2 rounded-full w-6 h-6 flex items-center justify-center">
            {cart.length}
          </span>
        </h1>
      </div>
      <div className=" space-y-3">
        {cart.map((bottle,index) => (
          <div key={index}>
            <div className="flex gap-6 items-center">
              <img className="w-16" src={bottle.img} alt="" />
              <h1 className="font-semibold">{bottle.name}</h1>
              <h1 className="font-semibold text-green-600">{bottle.price}$</h1>
              <button
                onClick={() => {
                  handleRemoveFromCart(index)
                    handleSubtraction(bottle.price);
                }}
                className="btn "
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="divider"></div>
      <h3 className="font-semibold">Total Price : {total}</h3>
    </div>
  );
};

export default Cart;
