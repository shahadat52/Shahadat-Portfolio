import React from "react";
import Footer from "./Pages/Footer/Footer";
import About from "./Pages/Home/About/About";
import Banner from "./Pages/Home/Banner/Banner";
import Contract from "./Pages/Home/Contract/Contract";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Contract />
      <Footer />
    </div>
  );
};

export default Home;
