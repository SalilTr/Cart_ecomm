import React from 'react'
import { Link } from 'react-router-dom'
import {FiShoppingBag} from "react-icons/fi"
import { useSelector } from 'react-redux'
import "../styles/Header.scss"
const Header = () => {
  const {cartItems}=useSelector((state)=>state.cart);
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{padding:"20px 10%"}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{width:"30%"}}>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/cart"> Cart
            <span><FiShoppingBag/></span>
            <p>{cartItems.length}</p>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          
          
        </ul>
        
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Header
