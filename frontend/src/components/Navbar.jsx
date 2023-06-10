import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {


  return (
    <nav
    className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top px-4"
    style={{ position: "static" ,height:"70px"}}
  >
    <div className="container-fluid">
      <NavLink className="navbar-brand" style={{ fontSize: "30px" }} to="/">
        Rainbow
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navmenu">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item" style={{ fontSize: "20px" }}>
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
          </li>
          <li className="nav-item" style={{ fontSize: "20px" }}>
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
          </li>
          <li className="nav-item" style={{ fontSize: "20px" }}>
              <NavLink className="nav-link" to="/faq">
                    FAQ'S
              </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar