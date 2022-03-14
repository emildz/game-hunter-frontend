import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import  CreateGame  from './components/CreateGame'
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route
              path="/"
              element={
                  <Home /> 
                }
            />
        <Route
              path="/CreateGame"
              element={
                  <CreateGame /> 
                }
            
            />
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
        </Routes>
      </Router>
    </>
  );
}

export default App;
