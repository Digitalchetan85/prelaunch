import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  
} from "react-bootstrap";
import { Link } from 'react-router-dom';
import image1 from "../../images/slider/meridian/image-1.png"
import image2 from "../../images/slider/eden-park/prestige.png"
import image3 from "../../images/slider/avalon-park/avalon-park-2.png"


const Projects = () => {
  const projects = [{ 
    id: 1, 
    title: "Mahindra Eden",
    description: "1, 2 & 3 BHK Appartments",
    imageurl: image1,
    link: "/projects/mahindra-eden",
    status:"New Launch"

},
{ id: 2, 
    title: "Purva Sparklings",
    description: "3 & 4BHK Luxurious Villas",
    imageurl: image2,
    link: "/projects/purva-sparklings",
    status:"New Launch"
},
{ id: 3, 
    title: "Valmark Apas",
    description: "3/4 BHK Appartments",
    imageurl: image3,
    link: "/projects/valmark-apas",
    status:"New Launch"
},
];
  return (
    <div className="bg-light py-3 py-md-5" id="projects">
      <Container fluid className="ps-0 pe-0">
        <Row className="justify-content-center g-3">
            <h2 className="py-3 text-primary text-center fs-3">Pre-launch Projects</h2> 
          {projects.map((project) => (
            <Col md={4} key={project.id}>
              <Card>
                <Card.Img variant="top" src={project.imageurl} className="position-relative" />
                  <h6 className="position-absolute end-0 bg-danger m-3 rounded-pill text-white p-2 pill-custom">{project.status}</h6>
                <Card.Body className="text-center">
                  <h2 className="fs-4">{project.title}</h2>
                  <h3 className="fs-5">{project.description}</h3>
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

export default Projects;
