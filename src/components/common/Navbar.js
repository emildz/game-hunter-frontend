// import React from "react"
import "./navbar.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
          <img src="logo.jpeg" alt="red and white logo for Game Hunter" />
        </Link>
        <Button
          onClick={() => navigate("/CreateGame")}
          type="custom"
          shape="round"
          style={{ color: "black", fontWeight: 400, marginRight: 20 }}
        >
          Create New Game
        </Button>
      </div>
    </>
  );
}
