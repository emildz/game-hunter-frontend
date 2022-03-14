// import React from "react"
import "./navbar.css";
import { Button } from "antd";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router";



export default function Navbar() {
  const navigate = useNavigate()
  return (
    <>
      <div className="navbar">
        <img src="logo.jpeg" alt="red and white logo for Game Hunter" />
        <Button onClick={() => navigate("/CreateGame")} type="custom" shape="round" style={{ color: "black", fontWeight: 700, marginRight: 24
    }}>
          Create New Game
        </Button>
      </div>
    </>
  );
}
