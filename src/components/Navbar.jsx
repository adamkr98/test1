import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
        <ul>
            <Link to="/login"><li>Login</li></Link>
            <Link to="/register"><li>register</li></Link>
        </ul>
        </>
    )
}

export default Navbar; 