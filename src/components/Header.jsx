import water_bottle from "../assets/water_bottle.png";
const Header = () => {
  return (
    <div>
      <h1 className=" font-extrabold text-4xl md:text-5xl">
        Your Perfect Water Bottle
      </h1>
      <div className="md:w-2/5 mx-auto">
        <img className="mx-auto" src={water_bottle} alt="" />
          </div>
          <button className="btn bg-blue-700 text-white font-semibold hover:text-blue-700 hover:bg-black" >Buy Now</button>
    </div>
  );
};

export default Header;
