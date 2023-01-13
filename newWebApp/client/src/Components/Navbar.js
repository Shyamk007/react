import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/List">List</Link></li>
            <li><Link to="/Form">Form</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;