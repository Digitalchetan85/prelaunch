import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import Info from "../Includes/Info";
import VirtualTour from "../Includes/VirtualTour";
import MeridianMasterPlan from "./MahindraEdenMasterPlan";
import MeridianPrice from "./MahindraEdenPrice";
import { Helmet } from "react-helmet";
import OtherProjectsMahindraEden from "./OtherProjectsMahindraEden";
import MahindraEdenSlider from "./MahindraEdenSlider";
import MahindraEdenMasterPlan from "./MahindraEdenMasterPlan";
import MahindraEdenAmenities from "./MahindraEdenAmenities";
import MahindraEdenPrice from "./MahindraEdenPrice";

const MahindraEden = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Mahindra Eden | Pre-Launching Project | Apartments 
        </title>
        <link
          rel="canonical"
          href="https://prelaunchprop.in/projects/mahindra-eden"
        />       
      </Helmet>
      <MahindraEdenSlider />
      <Container fluid>
        <Row>
          <Col md={9}>
            <div id="overview" className="py-3 py-md-5">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <h2 className="pb-2 text-center text-primary py-2 py-md-5 fs-3">
                      Project Highlights
                    </h2>
                    <span className="bg-danger position-absolute start-50 span-line"></span>
                    <Table className="table table-bordered align-middle">
                      <tbody>
                        <tr>
                          <th>Phase 1 Launch</th>
                          <td>270 Units</td>
                        </tr>
                        <tr>
                          <th>Total Units</th>
                          <td>2 - Towers, 4 - Wings</td>
                        </tr>
                        <tr>
                          <th>1-BHK</th>
                          <td>50 Units</td>
                        </tr>
                        <tr>
                          <th>2-BHK</th>
                          <td>54 Units</td>
                        </tr>
                        <tr>
                          <th>3-BHK</th>
                          <td>115 Units</td>
                        </tr>
                        <tr>
                          <th>3-BHK + Study</th>
                          <td>56 Units</td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className="py-2 py-md-2">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <h2 className="py-2 text-center text-primary fs-3">
                      Pre-Launching - Mahindra Eden
                    </h2>
                    <p>
                      <a href="/projects/mahindra-eden" className="fw-bold text-decoration-none">Mahindra Eden </a>  Apartments are complimented for a pious and perfect living that targets you to create a balance of space, comfort, and grandeur. The exquisite homes are an example of opulence and an establishment of a multitude of facilities. The large open spaces within the gated community where kids and seniors of the family a carefree and relish life to the fullest. Every member will indulge in something or the other fun activity and rejoice in prosperity.</p>
                    <p>Mahindra Eden Kanakapura where excitement reaches the next level considered by solace and soothing. Designed with great planning and the finest building where you can lose in pure harmony and peace. Dive in the swimming pool for a refreshing feel, an exotic clubhouse for relaxing senses, and the extensive lawns for the children to frolic and rejuvenate for all residents.
                    </p>
                    <p>Enjoy the luxury of a fully equipped clubhouse with the gamut of recreational amenities including a swimming pool, gym, health club, indoor badminton court, party halls, billiards, table tennis, board games, reading room, and provision for a crèche.
                    </p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div id="master-plan">
              <MahindraEdenMasterPlan />
            </div>

            <div className="py-3 py-md-5" id="amenities">
            <MahindraEdenAmenities/>
            </div>


            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <MahindraEdenPrice />
                  <Info />
                  <VirtualTour />
                </Row>
              </Container>
            </div>
          </Col>
          <Col md={3}>
            <Contact />
          </Col>
        </Row>
      </Container>
      <OtherProjectsMahindraEden />
      <FixedIcons />
    </div>
  );
};

export default MahindraEden;
