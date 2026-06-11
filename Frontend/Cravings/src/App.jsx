import { Link } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () =>{
  return (
    <>
      <BrowserRouter>
        <Header />

        {/* <Route path="/pages/Login" element={<Login />} /> */}

        <Routes>
           <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />
        </Routes>

      </BrowserRouter>

      <div >

      </div>

    </>

  );
}

export default App;
