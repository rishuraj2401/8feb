import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function Navb() {
  const mystyle={
    color:"#F2E3D5" ,
    fontWeight:"bold", 
    textShadow: "0.2vw 0.2vw 0.6vw #012E40",
    fontSize:"1.1em"
    } 
  
  return (
    
    <>
<div className="nav">
<nav className="navbar navbar-expand-lg navbar-light">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="navbar-brand" to="/" style={mystyle}>ℌ𝔬𝔪𝔢</Link>
      <Link className="nav-item nav-link " to="/Slogin"style={mystyle}>𝔖𝔱𝔲𝔡𝔢𝔫𝔱 <span className="sr-only">(current)</span></Link>
      <Link className="nav-item nav-link" to="/Hlogin"style={mystyle}>ℌ𝔬𝔰𝔱𝔢𝔩 ℑ𝔫𝔠𝔥𝔞𝔯𝔤𝔢</Link>
      <Link className="nav-item nav-link" to="/Glogin"style={mystyle}>𝔊𝔞𝔱𝔢-𝔊𝔲𝔞𝔯𝔡</Link>
      <Link className="nav-item nav-link" to="/Gatepass"style={mystyle}>𝔊𝔞𝔱𝔢𝔭𝔞𝔰𝔰</Link>
    </div>
  </div>
</nav>
</div>
 
    </>
  )
}

export default Navb
