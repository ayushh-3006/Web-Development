import { Link } from "react-router-dom";
import foodTable from "../images/foodTable.webp";

function Register() {
  return (
    <div className="relative w-full h-auto md:h-[90vh] flex flex-col md:block overflow-hidden bg-[#fff8f1] font-sans">
      {/* Background Image */}
      <img
        src={foodTable}
        alt="Food Table Layout"
        className="w-full h-[40vh] md:h-[90vh] object-cover"
      />

      {/* Registration Form Box */}
      <div className="<div className=w-[90%] max-w-112.5 mx-auto my-6 md:my-0 p-4 md:p-6 bg-white rounded-lg shadow-lg md:absolute md:top-[50%] md:right-[8%] md:-translate-y-1/2">
        <h2 className="text-center text-2xl font-bold mb-3 text-orange-700">
          Create Account
        </h2>
        <p className="text-center text-sm mb-4 text-zinc-600">
          Join us as a Customer, Restaurant, or Rider
        </p>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* Role Selection Options */}
          <div className="grid gap-2 mb-4">
            <span className="text-sm font-medium text-zinc-700">Register as:</span>
            <div className="flex flex-wrap gap-4 items-center text-sm text-zinc-700">
              <label className="flex items-center gap-1.5 cursor-pointer select-none">
                <input
                  type="radio"
                  id="customer"
                  name="role"
                  value="customer"
                  defaultChecked
                  className="text-orange-700 focus:ring-orange-700"
                />
                Customer
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer select-none">
                <input
                  type="radio"
                  id="restaurant"
                  name="role"
                  value="restaurant"
                  className="text-orange-700 focus:ring-orange-700"
                />
                Restaurant
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer select-none">
                <input
                  type="radio"
                  id="rider"
                  name="role"
                  value="rider"
                  className="text-orange-700 focus:ring-orange-700"
                />
                Rider
              </label>
            </div>
          </div>

          {/* Form Fields Wrapper */}
          <div className="grid gap-3 mb-4">
            <input
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:border-orange-700 focus:outline-none placeholder-zinc-700 placeholder-opacity-50 transition-colors bg-transparent text-sm"
            />
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:border-orange-700 focus:outline-none placeholder-zinc-700 placeholder-opacity-50 transition-colors bg-transparent text-sm"
            />
            <input
              type="tel"
              placeholder="Enter your phone number"
              required
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:border-orange-700 focus:outline-none placeholder-zinc-700 placeholder-opacity-50 transition-colors bg-transparent text-sm"
            />
            <input
              type="password"
              placeholder="Enter your password"
              required
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:border-orange-700 focus:outline-none placeholder-zinc-700 placeholder-opacity-50 transition-colors bg-transparent text-sm"
            />
            <input
              type="password"
              placeholder="Confirm your password"
              required
              className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:border-orange-700 focus:outline-none placeholder-zinc-700 placeholder-opacity-50 transition-colors bg-transparent text-sm"
            />
          </div>

          {/* Terms and Conditions Checkbox */}
          <div className="mb-4 flex items-start gap-2 text-sm text-zinc-700">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 rounded border-zinc-300 text-orange-700 focus:ring-orange-700 cursor-pointer"
            />
            <label htmlFor="terms" className="select-none cursor-pointer">
              I agree to the{" "}
              <Link to="/terms" className="text-orange-700 hover:underline">
                terms and conditions.
              </Link>
            </label>
          </div>

          {/* Registration Submit Action */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 rounded-md bg-orange-700 text-white font-medium transition-colors hover:bg-orange-800 text-sm shadow-sm"
          >
            Register
          </button>

          {/* Redirection Link to Login */}
          <div className="flex flex-wrap justify-center gap-1 mt-3 text-sm text-zinc-600">
            <p>Already registered?</p>
            <Link to="/Login" className="text-orange-700 font-medium hover:underline">
              Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;