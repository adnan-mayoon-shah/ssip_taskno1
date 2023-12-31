import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">PickCar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="#">About Us</NavLink>
        </li>

        <li className="nav-item">
          <NavLink className="nav-link" to="#">Details</NavLink>
        </li>
        <li className="nav-item" >
          <NavLink className="nav-link" to="#">Cars</NavLink>
        </li>


        <li className="nav-item">
          <NavLink className="nav-link" to="#">Contact Us</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
