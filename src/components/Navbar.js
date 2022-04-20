import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
        <h1>CAMPR NAV</h1>
        <nav>
        <div className="Links"> 
          <NavLink exact to="/">Campsites </NavLink>
          <br></br>
          <NavLink to="/reservations">Reservations </NavLink>
        </div>
        </nav>
        <h2>_____________________________</h2>
    </div>
  )
}

export default Navbar