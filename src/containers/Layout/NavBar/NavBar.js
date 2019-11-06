import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavStyle from "./NavBar.module.css";
const navbar = { backgroundColor: "#317F87" };
const textColor = { color: "white" };

class NavBar extends React.Component {
  render() {
    return (
      <Navbar sticky="top" style={navbar}>
        <Navbar.Brand href="#home" style={textColor}>
          SMASH, BRUH
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={textColor}>
            Home
          </Nav.Link>
          <Nav.Link onClick={()=>{this.props.charSelector(null)}} style={textColor}>
            Reset
          </Nav.Link>
          <Nav.Link href="#pricing" style={textColor}>
            {this.props.selectedCaracter}
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" style={textColor}>
            Search
          </Button>
        </Form>
      </Navbar>
    );
  }
}

export default NavBar;
