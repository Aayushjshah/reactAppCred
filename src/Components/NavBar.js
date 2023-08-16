import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "../App.css"
export default function Contact() {
return (
    <div>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
 <div className="container-fluid">
 <NavLink className="navbar-brand" to="/">CardCrud</NavLink>
 <div className="collapse navbar-collapse">
 <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
 <li className="nav-item">
    <NavLink className="nav-link" to="/Customers">Customers</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/analytics">Analytics</NavLink>
    </li>
    <li className="nav-item">
    <NavLink className="nav-link" to="/register">New Card</NavLink>
    </li>
    <li className="nav-item">
    {/* <NavLink className="nav-link" to="/login">Login</NavLink> */}
    <NavLink className="nav-link" to="/cancel">Cancel</NavLink>
    </li>

    <li className="nav-item">
    {/* <NavLink className="nav-link" to="/login">Login</NavLink> */}
    </li>
 </ul>
 </div>
 </div>
 </nav>
</div>
)
}

