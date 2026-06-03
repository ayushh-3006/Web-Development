//  import React from "react";        // it will work if we remove this line

import { FaWifi } from "react-icons/fa";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Register from "./pages/Register";
import Courses from "./pages/courses";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Courses" element={<Courses />} />
        </Routes>
      </BrowserRouter>

      {/* <Header />
      <About />
      <ContactUs />
      <Home />
      <Login />
      <Products/>
      <Register /> */}
    </>
  );
}

export default App;
