import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css"

function Header() {
  return (
    <div className="headerContainer">
        <h1 className="headerHeading">AMRUTAM</h1>
        <ul className="headerslist">
            <li className="listHeader"><Link to="/" className="navLink">Home</Link></li>
            <li className="listHeader"><Link to="/findDoctors" className="navLink navLink1">Find Doctors</Link></li>
            <li className="listHeader"><Link to="/about" className="navLink">About</Link></li>
        </ul>
        <div>
            <ul className='headerslist'>
                <li className="listHeader"><button className="loginBtn">Login</button></li>
                <li className="listHeader"><button className="logoutBtn">Sign-up</button></li>
            </ul>
        </div>
    </div>
  )
}

export default Header