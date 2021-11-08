import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";

const PublicNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">The Random Shop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex" style={{ flex: 0.8, margin: "auto" }}>
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
              style={{ flex: 1 }}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Log In</Nav.Link>

            <Nav.Link href="#" d>
              Cart
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default PublicNavbar;
