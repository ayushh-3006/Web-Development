// import { useState } from "react";
// import foodTableImg from "../images/foodTable.webp";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [remember, setRemember] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log("email :", email);
//     console.log("password :", password);
//     console.log("remember :", remember);
//   };

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   return (
//     <>
//       {/* Hero Section */}
//       <div className="hero-section position-relative">
//         <img id="hero" src={foodTableImg} alt="foodTable" />

//         {/* Forms */}
//         <div id="forms" className="forms">
//           <h2 className="text-center mb-3" id="wb">
//             Welcome Back
//           </h2>
//           <p className="text-center">Login to your Cravings account.</p>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3 w-100">
//               <label htmlFor="email" className="form-label">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 className="form-control custom-input"
//                 id="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 required
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="mb-3">
//               <label htmlFor="password" className="form-label">
//                 Password
//               </label>
//               <div className="position-relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   className="form-control custom-input pe-5"
//                   id="password"
//                   name="password"
//                   placeholder="Enter your password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 {/* Eye icon aligned right */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="18"
//                   height="18"
//                   fill="currentColor"
//                   className="bi bi-eye-fill position-absolute top-50 end-0 translate-middle-y me-3"
//                   id="togglePassword"
//                   style={{ cursor: "pointer" }}
//                   onClick={togglePasswordVisibility}
//                 >
//                   <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
//                   <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
//                 </svg>
//               </div>
//             </div>

//             <div className="mb-3 d-flex justify-content-between">
//               <div>
//                 <input
//                   type="checkbox"
//                   className="form-check-input"
//                   id="checkbox"
//                   name="remember"
//                   checked={remember}
//                   onChange={(e) => setRemember(e.target.checked)}
//                 />
//                 <label htmlFor="checkbox" className="form-label ms-1">
//                   Remember me
//                 </label>
//               </div>
//               <div>
//                 <a
//                   href="forgot-password.html"
//                   className="text-decoration-none"
//                   id="clr"
//                 >
//                   Forgot password?
//                 </a>
//               </div>
//             </div>

//             <button type="submit" className="regis btn w-100">
//               Login
//             </button>
//             <div className="d-flex align-items-center justify-content-center">
//               <hr className="w-25" />
//               <p className="text-center mt-3">Don't have an account?</p>
//               <hr className="w-25" />
//             </div>
//             <a
//               href="register.html"
//               className="regi fw-medium d-flex justify-content-center"
//             >
//               Create an account
//             </a>
//           </form>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Login;

import { useState } from "react";
import foodTableImg from "../images/foodTable.webp";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("email :", email);
    console.log("password :", password);
    console.log("remember :", remember);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* Hero Section - justify-content-start aligns the inner content card to the left side */}
      <div 
        className="d-flex align-items-center justify-content-start min-vh-100 position-relative p-3 hero-bg-wrapper"
        style={{ backgroundImage: `url(${foodTableImg})` }}
      >
        {/* Forms Card - added ms-md-5 to give it that exact margin spacing from the left screen boundary */}
        <div id="forms" className="forms bg-white p-4 p-md-5 rounded shadow form-card-container ms-md-5">
          <h2 className="text-center mb-1 fw-bold brand-color-text" id="wb">
            Welcome Back
          </h2>
          <p className="text-center text-muted small mb-4">Login to your Cravings account.</p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 w-100">
              <label htmlFor="email" className="form-label small fw-bold text-secondary">
                Email
              </label>
              <input
                type="email"
                className="form-control custom-input py-2"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label small fw-bold text-secondary">
                Password
              </label>
              <div className="position-relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control custom-input pe-5 py-2"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* Eye icon aligned right */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="bi bi-eye-fill position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                  id="togglePassword"
                  style={{ cursor: "pointer" }}
                  onClick={togglePasswordVisibility}
                >
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                </svg>
              </div>
            </div>

            <div className="mb-4 d-flex justify-content-between align-items-center small">
              <div className="d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input m-0"
                  id="checkbox"
                  name="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <label htmlFor="checkbox" className="form-label ms-2 mb-0 text-muted fw-normal">
                  Remember me
                </label>
              </div>
              <div>
                <a href="forgot-password.html" id="clr" className="brand-color-link">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button type="submit" className="regis btn w-100 py-2 text-white fw-medium rounded brand-submit-btn">
              Login
            </button>
            
            <div className="d-flex align-items-center justify-content-center my-2">
              <hr className="w-25" />
              <p className="text-center text-muted small mx-2 my-2">Don't have an account?</p>
              <hr className="w-25" />
            </div>
            
            <a
              href="register.html"
              className="regi fw-medium d-flex justify-content-center small brand-color-link"
            >
              Create an account
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;