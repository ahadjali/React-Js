//import logo from './logo.svg';
import './App.css';
import { Form, Button, FormGroup, FormControl, ControlLabel, Container, Row, Col } from "react-bootstrap";
import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Reat-Js</Nav.Link>
          <Nav.Link href="#features">Bootstrap</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      <br/>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="5">
            <Form.Control plaintext readOnly defaultValue="email@example.com" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="5">
            <Form.Control type="password" placeholder="Password" />
          </Col>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

    </div>
  );
}

export default App;
