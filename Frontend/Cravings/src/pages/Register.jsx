import { useState } from "react";
import foodTableImg from "../images/foodTable.webp";

function Register() {
  const [role, setRole] = useState("customer");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("role :", role);
    console.log("fullName :", fullName);
    console.log("email :", email);
    console.log("phone :", phone);
    console.log("password :", password);
    console.log("confirmPassword :", confirmPassword);
    console.log("agree :", agree);
  };

  return (
    <>
      {/* Hero Section - Uses hero-bg-wrapper */}
      <div 
        className="d-flex align-items-center justify-content-end min-vh-100 position-relative p-3 hero-bg-wrapper"
        style={{ backgroundImage: `url(${foodTableImg})` }}
      >
        {/* Forms Card - Uses form-card-container and ms-md-5 for left-side positioning */}
        <div id="forms" className="forms bg-white p-4 p-md-5 rounded shadow form-card-container me-md-1">
          <h2 className="text-center mb-3 fw-bold brand-color-text" id="wb">
            Create Account
          </h2>
          <p className="text-center text-muted small mb-4">Join us as a Customer, Restaurant, or Rider</p>

          <form onSubmit={handleSubmit}>
            <div className="d-grid gap-3">
              <span className="small fw-bold text-secondary">Register as:</span>

              <div className="d-flex flex-wrap gap-3 align-items-center mb-2">
                <div className="d-flex align-items-center">
                  <input
                    type="radio"
                    id="customer"
                    name="role"
                    value="customer"
                    className="form-check-input m-0"
                    checked={role === "customer"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label htmlFor="customer" className="form-label ms-2 mb-0 fw-normal">Customer</label>
                </div>

                <div className="d-flex align-items-center">
                  <input
                    type="radio"
                    id="restaurant"
                    name="role"
                    value="restaurant"
                    className="form-check-input m-0"
                    checked={role === "restaurant"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label htmlFor="restaurant" className="form-label ms-2 mb-0 fw-normal">Restaurant</label>
                </div>

                <div className="d-flex align-items-center">
                  <input
                    type="radio"
                    id="rider"
                    name="role"
                    value="rider"
                    className="form-check-input m-0"
                    checked={role === "rider"}
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <label htmlFor="rider" className="form-label ms-2 mb-0 fw-normal">Rider</label>
                </div>
              </div>
            </div>

            <div className="mb-3 w-100 d-grid gap-3 mt-3">
              <input
                type="text"
                className="form-control custom-input py-2"
                placeholder="Enter your full name"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <input
                type="email"
                className="form-control custom-input py-2"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="tel"
                className="form-control custom-input py-2"
                placeholder="Enter your phone number"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="password"
                className="form-control custom-input py-2"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                className="form-control custom-input py-2"
                placeholder="Confirm your password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="mb-4 d-flex align-items-center small">
              <input 
                type="checkbox" 
                className="form-check-input m-0" 
                id="agreeCheckbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
              />
              <label htmlFor="agreeCheckbox" className="form-label ms-2 mb-0 text-muted fw-normal">
                I agree to the{" "}
              </label>
              {/* Uses brand-color-link */}
              <a href="#" id="clr" className="brand-color-link ms-1">
                terms and conditions.
              </a>
            </div>

            {/* Uses brand-submit-btn */}
            <button type="submit" className="regis btn w-100 py-2 text-white fw-medium rounded brand-submit-btn">
              Register
            </button>

            <div className="d-flex flex-wrap justify-content-center gap-1 mt-3 small">
              <p className="mb-0 text-muted">Already registered?</p>
              <a href="login.html" className="brand-color-link fw-medium">
                Login here
              </a>
            </div>             
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;