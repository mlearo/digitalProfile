import * as React from "react"
import { Link } from "gatsby";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const navCollapseStyle = {
  float : 'right'
}
const navStyle = {
  backgroundColor : "transparent",

}

const menuTextStyle = {
  color : "rgb(30 173 127 / 90%)"

}


const Navigation = ({ }) => {


  return (
    
    <Navbar style={ navStyle }  className="" collapseOnSelect expand="md" >
      <Link style={{marginLeft: "1%"}} className="navbar-brand" to="/"> Michael Learo </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse style={navCollapseStyle} id="responsive-navbar-nav">
        <Nav className="" >
          <Link className="nav-link" to='ramblings'>Ramblings</Link>
          <Link className="nav-link" to="coding">Coding</Link>
          <NavDropdown title="Travel Pics" id="collasible-nav-dropdown">
            <Link className="dropdown-item" to="/photos/japan">Japan</Link>
            <Link className="dropdown-item" to="/photos/spain">Spain</Link>
            <Link className="dropdown-item" to="/photos/portugal">Portugal</Link>
            <Link className="dropdown-item" to="/photos/italy">Italy</Link>
          </NavDropdown>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Navigation;