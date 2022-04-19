import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import MainSlider from "../Includes/MainSlider";
import Modals from "../Includes/Modals";
import Projects from "../Includes/Projects";
import { Helmet } from "react-helmet";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Prelaunch Prop</title>
        <link rel="canonical" href="https://prelaunchprop.in/" />
        
      </Helmet>

      <MainSlider />
      <Container fluid className="ps-0 pe-0 ps-md-4 pe-md-4 bg-light">
        <Row className="ms-0 me-0">
          <Col md={9}>
            <div id="overview">
            </div>
            <Projects />
          </Col>
          <Col md={3}>
            <Contact />
          </Col>
        </Row>
      </Container>      

      <FixedIcons />
      <Modals
        show={show}
        handleClose={handleClose}
        title="Contact Us For More Details"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default Home;
