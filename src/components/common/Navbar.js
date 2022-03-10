// import React from "react"
import "./navbar.css"
import {Button}  from 'antd';


export default function Navbar(){
    return (
    <>
    <div className="navbar">
        <img src="logo.jpeg" alt="red and white logo for Game Hunter"/>
    <Button type="primary" shape="round" style={{color:'red'}} >
          Create New Game
        </Button>
    </div>
    </>
    )
}