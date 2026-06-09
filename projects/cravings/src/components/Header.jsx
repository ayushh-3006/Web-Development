import { Link } from "react-router-dom";
import cravings from "../images/cravings1.png";

function Header() {
  return (
    <div
      id="navbar"
      className="sticky top-0 left-0 z-999 h-16 bg-orange-700 px-12 py-1 flex justify-between items-center flex-wrap"
    >
      {/* Logo */}
      <div className="ms-1">
        <Link to="/cravings">
          <img src={cravings} alt="Logo" className="h-12 w-auto" />
        </Link>
        
      </div>

      {/* Buttons */}
      <div className="flex gap-2 items-center mt-2 md:mt-0">
        <Link to="/Login">
          <button className="px-4 py-2 rounded-md bg-orange-700 text-white border border-transparent hover:border-gray-200 transition-colors">
            Login
          </button>
        </Link>

        <Link to="/Register">
          <button className="px-4 py-2 rounded-md bg-orange-700 text-white border border-transparent hover:border-gray-200 transition-colors">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
