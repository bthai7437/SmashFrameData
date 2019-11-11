import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import FormStyle from "./Auth.module.css";
import { Button } from "react-bootstrap";

class Auth extends Component {
  render() {
    const signUpForm = (
      <div>
        <Form className={FormStyle.Form}>
          <Form.Group controlId="formGroupUser">
            <Form.Label style={{ color: "white" }}>Username</Form.Label>
            <Form.Control type="text" placeholder="Enter Username" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label style={{ color: "white" }}>Password</Form.Label>
            <Form.Control type="text" placeholder="Enter Password" />
          </Form.Group>
          <Button variant="light" style={{ marginTop: "80px" }}>
            Create Account
          </Button>
        </Form>
        <div className={FormStyle.Account}>
          Already have an account?{" "}
          <Button variant="light" size="sm" style={{ marginLeft: "30px" }}>
            Sign In
          </Button>
        </div>
      </div>
    );
    return signUpForm;
  }
}

export default Auth;
