import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import NavStyle from "./NavBar.module.css";
import { Link } from "react-router-dom";
const navbar = { backgroundColor: "#317F87" };
const textColor = { color: "white" };

class NavBar extends React.Component {
  navChar = () => {
    return !this.props.selectedCharacter ? null : this.props.charSelector(null);
  };

  render() {
    return (
      <Navbar sticky="top" style={navbar}>
        <Navbar.Brand href="#home" style={textColor}>
          <Link to={"/"} style={textColor}>
            SMASH, BRUH
          </Link>
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home" style={textColor}>
            <Link to={"/"} style={textColor}>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link onClick={this.navChar} style={textColor}>
            Reset
          </Nav.Link>
        </Nav>
        <Navbar.Text style={textColor}>
          {this.props.selectedCharacter}
        </Navbar.Text>
      </Navbar>
    );
  }
}

export default NavBar;
