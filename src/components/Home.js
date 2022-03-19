import React from "react";
import Navbar from "./common/Navbar";
import Hero from "./home/Hero";
import Main from "./home/Main";
import Footer from "./common/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
