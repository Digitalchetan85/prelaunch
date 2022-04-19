import React from "react";
import { Col, Container, Row, Table } from "react-bootstrap";
import Contact from "../Includes/Contact";
import FixedIcons from "../Includes/FixedIcons";
import Info from "../Includes/Info";
import VirtualTour from "../Includes/VirtualTour";
import AvalonMasterPlan from "./ValmarkApasMasterPlan";
import AvalonSlider from "./ValmarkApasSlider";
import {Helmet} from "react-helmet";
import OtherProjectsValmarkApas from "./OtherProjectsValmarkApas";
import ValmarkApasPrice from "./ValmarkApasPrice";

const ValmarkApas = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Valmark Apas | Pre-Launching Project| 3BHK | 4BHK Apartments </title>
        <link rel="canonical" href="https://theprestigecitysarjapur.com/projects/avalon-park" />
        
      </Helmet>
      <AvalonSlider />
      <Container fluid>
        <Row>
          <Col md={9}>
            <div id="overview" className="py-3 py-md-5">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <Col md={12}>
                    <h2 className="pb-2 text-center text-primary py-2 py-md-5 fs-3">
                      Valmark Apas Project Highlights
                    </h2>
                    <span className="bg-danger position-absolute start-50 span-line"></span>
                    <Table className="table table-bordered align-middle">
                      <tbody>
                          <tr>
                          <th>Development Size</th>
                          <td>2.1 Acres</td>
                        </tr>
                        <tr>
                          <th>Total No. of Units</th>
                          <td>112 units</td>
                        </tr>
                        <tr>
                          <th>No. of Blocks</th>
                          <td>2</td>
                        </tr>
                        <tr>
                          <th>No. of Lifts</th>
                          <td>3 lifts per block</td>
                        </tr>
                        <tr>
                          <th>No. of Units Per Floor</th>
                          <td>2</td>
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
                      About Valmark Apas
                    </h2>
                    <p>
                    Uber luxurious high-rise residential apartments Off Bannerghatta road,Opp to Hulimavu lake.
                    </p>
                    <p>Combinations of 3 & 4 BHKs of 3170 & 3560 sft respectively Thoughtfully designed in a way every house can view the sunrise and sunset, with breathtaking views of the Hulimavu lake.</p>
                    <p>2 basements, ground + 28 upper floors, 12000 sft of clubhouse on the ground floor  comprising of all the indoor amenities you can think of.</p>
                    <p>Homes come with false ceiling , centralised AC, home automation, Italian marble,wooden flooring in master bedroom and high-end fixtures.</p>
                    <p>Good quality of  construction with mivan technology for all external walls and block masonry internal walls.</p>
                    <p> Customizable Homes, Location just 1.5 KM from Bannerghatta Main road.</p>
                    <p>Breathtaking view of Hulimavu lake with individual unit balconies facing east and west allowing natural light and ventilation inside the apartment all through the day.</p>
                    <p>since there are only two units per floor, there is complete privacy within the unit. None of the areas within the apartment are exposed with neighbouring units.

                    </p>
                    <h5>To sum it up Valmark Apas is " luxurious inside with mesmerizing views outside"</h5>
                    <p>To book your home at special price, call .......<br />Rush... as this offer is for limited number of bookings and time.</p>
                  </Col>
                </Row>
              </Container>
            </div>

            <div id="master-plan">
              <AvalonMasterPlan />
            </div>

            <div className="py-3 py-md-5" id="amenites">
              <Container fluid className="ps-0 pe-0">
                <Row className="justify-content-center">
                  <h2 className="text-center text-primary py-2 py-md-3 fs-3">
                  Purva Sparklings Amenities
                  </h2>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Jogging Track</li>
                      <li>Amphitheatre</li>
                      <li>Foot Reflexology</li>
                      <li>Tennis Courts</li>
                      <li>Futsal Court</li>
                      <li>Function Lawn</li>
                    </ul>
                  </Col>
                  <Col md={3} xs={6}>
                    <ul>
                      <li>Party Zone</li>
                      <li>Pet's Corner</li>
                      <li>Senior's Corner</li>
                      <li>Urban Farming</li>
                      <li>Pool with deck</li>
                      <li>Pavilion</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <ValmarkApasPrice />
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
      <OtherProjectsValmarkApas />
      <FixedIcons />
    </div>
  );
};

export default ValmarkApas;
