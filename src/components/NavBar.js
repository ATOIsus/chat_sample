import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom"; 
export default function AppNavbar() {
  return (
    <Navbar className="col-12" expand="lg" style={{ border: '2px solid #ccc' }}>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Brand className="col-1" as={Link} to="/">
        <img src={"logo.jpg"} alt="logo" height={"45px"} width={"80%"}/>
      </Navbar.Brand>

      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-between col-10"
      >
        <Form inline className="col-6">
          <div className="row">
            <div className="col-sm-12" style={{ position: "relative" }}>
              <div style={{ position: "relative" }}>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  style={{ paddingRight: "30px", borderRadius: "20px" }}
                />
                <i
                  className="fa fa-search"
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    fontSize: "18px",
                    color: "#888888",
                    cursor: "pointer",
                  }}
                ></i>
              </div>
            </div>
          </div>
        </Form>
        <Nav className="col-4 justify-content-around">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>

          <Nav.Link as={Link} to="/">
            About Us
          </Nav.Link>
        </Nav>

        <Nav className="col-2 justify-content-center">
          <Nav.Link href="#">
            <i className="fa fa-users"></i>
          </Nav.Link>
          <Nav.Link href="#">
            <i className="fa fa-user"></i>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
