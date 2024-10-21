

const Bottle = ({bottle,handleAddToCart}) => {
    const { name, price, img } = bottle;
    return (
        <div className="space-y-3 shadow-xl rounded-xl p-5 my-10">
            <div className=" ">
                <img className="w-full rounded-xl" src={img} alt="" />
            </div>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">{name }</h3>
                <h3 className="font-bold  text-green-600 text-2xl">{price }$</h3>
            </div>
            <button onClick={() => {
                handleAddToCart(bottle);
            }} className="btn bg-blue-700 text-white font-semibold hover:text-blue-700 hover:bg-black">
        Buy
      </button>
        </div>
    );
};

export default Bottle;