import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Hero from "./components/home/Hero";
import Main from "./components/Main";
import Footer from "./components/common/Footer";
import { Layout } from "antd";
import { CreateGame } from './components/CreateGame'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <br />
        <Hero />
        <br />
        <Main/>
        <br />
        <Footer/>
        {/* <Layout.Header
          style={{
            position: "fixed",
            width: "100%",
            display: "flex",
            zIndex: "10",
          }}
        > */}
        {/* </Layout.Header> */}
        {/* <Routes>
          <Route path="/" exact />
          {/* <Route path="/create-game" element={<CreateGame />} /> 
        </Routes> */}
      </Router>
    </>
  );
}

export default App;
