import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-white">
      <div className="max-w-screen-xl mx-auto py-3 px-5 flex items-center justify-between">
        <Link to="/" className="text-gray-800 no-underline">
          <h1 className="text-2xl font-black py-2 tracking-tight">Workout Buddy</h1>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
