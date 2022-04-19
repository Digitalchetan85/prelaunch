import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import image2 from "../../images/slider/eden-park/eden-park-2.png";
import image3 from "../../images/slider/avalon-park/avalon-park-2.png";

const OtherProjectsMahindraEden = () => {
  const projects = [
    {
      id: 1,
      title: "Purva Sparklings",
      description: "3 & 4BHK Villas",
      imageurl: image2,
      link: "/projects/purva-sparklings",
      status: "New Launch",
    },
    {
      id: 2,
      title: "Valmark Apas",
      description: "3/4 BHK Appartments",
      imageurl: image3,
      link: "/projects/valmark-apas",
      status: "New Launch",
    },
  ];
  return (
    <div className="bg-light py-3 py-md-5" id="projects">
      <Container fluid>
        <Row className="justify-content-center g-3">
          <h2 className="py-3 text-primary text-center fs-3">
            Pre-Launching Projects
          </h2>
          {projects.map((project) => (
            <Col md={6} key={project.id}>
              <Card>
                <Card.Img
                  variant="top"
                  src={project.imageurl}
                  className="position-relative"
                />
                <h6 className="position-absolute end-0 bg-danger m-3 rounded-pill text-white p-2 pill-custom">
                  {project.status}
                </h6>
                <Card.Body className="text-center">
                  <h3 className="fs-5">{project.title}</h3>
                  <h4 className="fs-6">{project.description}</h4>
                  <div className="text-center">
                    <Button
                      variant="primary"
                      as={Link}
                      to={project.link}
                      className=""
                    >
                      Read More
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default OtherProjectsMahindraEden;
