import React, { Component } from 'react'
import { Button,Navbar,Nav,NavDropdown,Carousel,Form,FormControl} from 'react-bootstrap';
import { BrowserRouter, Route, Switch,Link} from 'react-router-dom';
import image1 from './images/images.png';

export class Header extends Component {
  render() {
    
    return (
      <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand > <img src={image1} style={{fontWeight:"bold" , height:"60px", width:"60px" , borderRadius: "", marginTop: "", marginLeft: "" }} /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     <Nav.Link style={{textDecoration:'none'}}  ><Link to="/" style={{textDecoration:'none'}}   ><h5>Home</h5></Link></Nav.Link>
      <Nav.Link ><Link to="/signup" style={{textDecoration:'none'}} ><h5>Contact</h5></Link></Nav.Link>
      <NavDropdown title="Services" id="collasible-nav-dropdown" fontWeight="bold">

        <NavDropdown.Item><Link to="/StudentForm">StudentForm</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3"><Link to="/TeacherFrom">TeacherForm</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3"><Link to="/dashboard">Dashboard</Link></NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4" onClick={this.go1}>Syl Paractice</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <Link to="/TeacherSignIn" style={{textDecoration:'none'}} ><Nav.Link href="#deets" style={{textDecoration:'none'}} ><h3    style={{color:"blue"} }>Teacher</h3></Nav.Link></Link>
    <Link to="/StudentSignIn" style={{textDecoration:'none'}} > <Nav.Link eventKey={2} href="#nh" style={{textDecoration:'none'}} >
        <h3  style={{  color:"green"} }>Student</h3>
      </Nav.Link> </Link> 
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    )
  }
}

export default Header
