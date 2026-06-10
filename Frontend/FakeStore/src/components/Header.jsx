import React from "react";
import { Link } from "react-router-dom";
import { FaStore } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-blue-500 text-white p-4">
      <div className="flex justify-between items-center">
        
     
        <div className="flex items-center gap-2">
          <FaStore />
          <h1 className="text-xl font-bold ">MyStore</h1>
        </div>

      
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
          <Link to="/contactus">Contact Us</Link>
       
        </div>

      </div>
    </div>
  );
};

export default Header;