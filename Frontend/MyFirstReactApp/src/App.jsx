//  import React from "react";        // it will work if we remove this line

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div id="ayush">My first react app </div>

      <p className="bg-primary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsa
        minus excepturi, saepe, nemo optio nam nihil et praesentium, ullam
        pariatur quidem culpa laborum amet quod natus totam iure ipsum.
      </p>

      <button className="bg-success">click here</button>

      <Footer />
    </>
  );
}

export default App;
