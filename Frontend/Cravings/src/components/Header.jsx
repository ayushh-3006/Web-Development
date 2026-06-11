import { Link } from "react-router-dom";
import cravings from "../images/cravings1.png";


function Header() {
  return (
    <>
      <div
        id="navbar"
        className="d-flex justify-content-between align-items-center flex-wrap container-fluid px-5 py-1"
      >
        <div className="logoDiv ms-1">
         
          <Link to="/cravings">
            <img src={cravings} alt="Logo" className="logo-img img-fluid" />
          </Link>
        </div>

        <div className="d-flex gap-2 align-items-center mt-2 mt-md-0">
          <Link to={"/Login"}>
            <button class="button" className="btn btn-primary">
              Login
            </button>
          </Link>

          <Link to={"/Register"}>
            <button class="button" className="btn btn-primary">
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
