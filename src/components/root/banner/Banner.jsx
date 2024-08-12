import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div
  className="hero min-h-screen mt-4"
  style={{
    backgroundImage: "url(https://i.ibb.co/9gp3sY4/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-orange-300">Hello Foodie...</h1>
      <p className="mb-5">
      "Add My Favourite Food" is your personalized culinary experience! Easily customize your meals by adding your favorite ingredients to any dish. Whether you're ordering online or dining out, our platform lets you tailor every order to your unique taste. Discover a world of flavor, where every meal is made just the way you like it.
      </p>
      <Link to='/addfood'>
      
      
      <button  type="button" class='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-8 mb-8'>Add My Food </button>
      
      </Link>
    </div>
  </div>
</div>
    );
};

export default Banner;