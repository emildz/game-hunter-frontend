// import React from "react"
import "./navbar.css";
import { Button } from "antd";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <img src="logo.jpeg" alt="red and white logo for Game Hunter" />
        <Button type="custom" shape="round" style={{ color: "black", fontWeight: 700, marginRight: 24
    }}>
          Create New Game
        </Button>
      </div>
    </>
  );
}
