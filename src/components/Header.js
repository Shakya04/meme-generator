import React from "react";
import logo from "../images/Logo.png"

export default function Header(){
    return(
        <nav>
            <img src={logo} className="nav-logo"/>
            <h2 className="nav-topic">React course project - 3</h2>
        </nav>
    )
}