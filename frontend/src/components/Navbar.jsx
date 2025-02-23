import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 max-w-screen-xl mx-auto">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo (Text) on the left */}
        <Link to={"/"} className="text-2xl font-bold text-white">
          Pro
          <span className="text-blue-500">Mern</span>
        </Link>

        {/* Button on the right */}
        <Link
          to={"create"}
          className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md "
        >
          Create a Product
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
