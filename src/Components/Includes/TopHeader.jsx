import React, { useState } from "react";
import {
  Container,
  Navbar,
  Nav,
  
  Row,
  Col,
  
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Modals from "./Modals";

const TopHeader = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="sticky-top" id="navbar">
      <div id="top-header" className="p-2 p-md-1 bg-dark">
        <Container>
          <Row className="justify-content-center">
            <Col
              md={4}
              className="d-none d-md-block text-info fw-bold align-self-center"
            >
              <i className="fa fa-map-marker-alt"></i>  Bangalore
            </Col>
            <Col md={4} xs={5} className="align-self-center">
              <div className="text-center">
                <Button
                  variant="info"
                  size="sm"
                  onClick={handleShow}
                  className="custom-button"
                >
                  <i className="fa fa-spinner fa-flip fa-download"></i> Brochure
                </Button>
              </div>
            </Col>
            <Col md={4} xs={7} className="align-self-center">
              <div className="text-center">
                <a
                  href="tel:+918147203771"
                  className="anchor p-0 btn btn-transparent fw-bold text-info m-1"
                >
                  <i className="fa fa-phone-volume"></i> +91-81472 03771
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="light"
        className="shadow-sm bg-white"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h5>Pre-Launch Prop</h5>
          </Navbar.Brand>
          {/* <Nav.Link
            className="btn-sm btn-danger text-white d-block d-md-none px-3 border-0"
            href="tel:08147203771"
          >
            <i className="fa fa-phone-volume"></i> 81472 03771
          </Nav.Link> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="https://mahindra-eden.prelaunchprop.in">Mahindra Eden</Nav.Link>
              <Nav.Link href="https://purva-sparkling-springs.prelaunchprop.in">Purva Sparklings Springs</Nav.Link>
              <Nav.Link href="https://valmark-apas.prelaunchprop.in">Valmark Apas</Nav.Link>
            </Nav>
            {/* <Nav>
              <Nav.Link
                className="btn-sm btn-danger text-white"
                href="tel:08147203771"
              >
                <i className="fa fa-phone-volume"></i> + 91 80959 99000
              </Nav.Link>
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modals
        show={show}
        handleClose={handleClose}
        title="Download Brochure"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default TopHeader;
