import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const TopBar = ()=>{

    return (
        <div>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/home"><h6>CRUD Operation</h6></Navbar.Brand>
            <Nav className="TopBar">
              
              <Nav.Link href="/Login">Login</Nav.Link>
              <Nav.Link href="/Register">Register</Nav.Link>
              <Nav.Link href="/Update">Update</Nav.Link>
              <Nav.Link href="/Delete">Delete</Nav.Link>
            </Nav>
            <div>
              
        </div>
          </Container>
        </Navbar>
        
        <br />
        <br />
        
       
      </div>

        
      );
}
export default TopBar;
