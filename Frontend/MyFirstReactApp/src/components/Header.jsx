import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-primary-subtle p-2 d-flex justify-content-between align-items-center">
        <div className="text-dark fs-4 fw-bold">My company</div>

        <div className="d-flex gap-4 fs-5 " id="ayush1">

            <Link to={"/"}>Home</Link>
            <Link to={"/About"}>About</Link>
            <Link to={"/Products"}>Products</Link>
            <Link to={"/ContactUs"}>ContactUs</Link>
             <Link to={"/Courses"}>Courses</Link>



          {/* <span>Home</span>
            <span>about</span>
            <span>products</span>
            <span>contact us</span> */}
        </div>

        <div className="d-flex gap-3 ">

            <Link to={"/Login"}>
                <button className="btn btn-primary">Login</button>
            </Link>

            <Link to={"/Register"}>
             <button className="btn btn-primary">Register</button>
            </Link>
          
        </div>
      </div>
    </>
  );
}
export default Header;
