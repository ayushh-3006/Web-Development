import { useState } from "react";
import { Link } from "react-router-dom";
import foodTable from "../images/foodTable.webp";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full h-auto md:h-[90vh] flex flex-col md:block overflow-hidden bg-[#fff8f1]">
      {/* Background Image */}
      <img
        src={foodTable}
        alt="Food Table Layout"
        className="w-full h-[40vh] md:h-[90vh] object-cover"
      />

      {/* Login Container Box */}
      <div className="<div className=w-[90%] max-w-[445px] mx-auto my-6 md:my-0 p-7 bg-[#f4f4f5] rounded-lg shadow-lg md:absolute md:top-[13%] md:left-[8%]">
        <h2 className="text-center text-2xl font-bold mb-3 text-orange-700">
          Welcome Back
        </h2>
        <p className="text-center text-sm mb-6 text-gray-600">
          Login to your Cravings account.
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* Email Field */}
          <div className="mb-4 w-full">
            <label htmlFor="email" className="block text-sm font-medium mb-1 text-zinc-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:border-orange-700 focus:outline-none placeholder-zinc-700 placeholder-opacity-50 transition-colors bg-transparent"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium mb-1 text-zinc-700">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full pl-3 pr-10 py-2 border border-zinc-300 rounded-md focus:border-orange-700 focus:outline-none placeholder-zinc-700 placeholder-opacity-50 transition-colors bg-transparent"
              />
              
              {/* Eye Toggle Icon Action */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400 hover:text-orange-700 focus:outline-none"
              >
                {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                    <path d="M3.35 5.47q-.27.24-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Form Options */}
          <div className="mb-4 flex justify-between items-center text-sm text-zinc-700">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checkbox"
                name="remember"
                className="rounded border-zinc-300 text-orange-700 focus:ring-orange-700 mr-2 cursor-pointer"
              />
              <label htmlFor="checkbox" className="select-none cursor-pointer">
                Remember me
              </label>
            </div>
            <Link to="/forgot-password" className="text-orange-700 hover:underline transition-all">
              Forgot password?
            </Link>
          </div>

          {/* Submit Action */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-md bg-orange-700 text-white font-medium transition-colors hover:bg-orange-800"
          >
            Login
          </button>

          {/* Separation Boundary */}
          <div className="flex items-center justify-center my-4">
            <hr className="w-1/4 border-zinc-300" />
            <p className="text-center text-xs mx-2 text-zinc-400 whitespace-nowrap">
              Don't have an account?
            </p>
            <hr className="w-1/4 border-zinc-300" />
          </div>

          {/* Route Redirection */}
          <Link
            to="/Register"
            className="text-orange-700 font-medium flex justify-center hover:underline transition-all"
          >
            Create an account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;