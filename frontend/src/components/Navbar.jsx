import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import QuizHome from './QuizHome';
import { useContext } from 'react';
import { MyContext } from './ContextAPI';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {

  const { text, setText } = useContext(MyContext);
  const navigate = useNavigate();

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
                {
                  text ?(<NavLink className="nav-link" to="/login">
                  Login
                </NavLink>):(
                <NavLink className="nav-link" to="/quizhome">
                  Quiz
                </NavLink>
                )
                }
            </li>
          <li className="nav-item" style={{ fontSize: "20px" }}>
              {
                text?(
                <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>):(

                      <button onClick={() => {
                        setText(!text);
                        navigate("/");
                      }}>
                      Logout
                      </button>

              )}
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