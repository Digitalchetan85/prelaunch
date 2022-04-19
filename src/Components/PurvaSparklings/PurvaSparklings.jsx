import React from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap'
import Contact from '../Includes/Contact'
import FixedIcons from '../Includes/FixedIcons'
import Info from '../Includes/Info'
import VirtualTour from '../Includes/VirtualTour'
import EdenMasterPlan from './PurvaSparklingsMasterPlan'
import EdenPrice from './PurvaSparklingsPrice'
import EdenSlider from './PurvaSparklingsSlider'
import {Helmet} from 'react-helmet'
import OtherProjectsPurvaSparklings from './OtherProjectsPurvaSparklings'
import PurvaSparklingsAmenities from './PurvaSparklingsAmenities'

const PurvaSparklings = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Purva Sparklings | Pre-Launching Project| 3BHK | 4BHK Villas</title>
        <link rel="canonical" href="https://prelaunchprop.in/projects/purvs-sparklings" />
        
      </Helmet>
      <EdenSlider />
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
                          <th>Development Size</th>
                          <td>20 Acres</td>
                        </tr>
                        <tr>
                          <th>Type</th>
                          <td>Villas</td>
                        </tr>
                        <tr>
                          <th>Total No. of Units</th>
                          <td>47</td>
                        </tr>
                        <tr>
                          <th>No. of Rooms</th>
                          <td>3 & 4 BHK</td>
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
                    Purva Sparkling Springs - The Sound of Water
                    </h2>
                    <p>
                    We at Puravankara take great pride in introducing our new villa project ‘Purva sparkling springs’. This unique theme based villa project is inspired by the finest elements of the rain forest. In our endeavour to create high quality living experience we have reaffirmed the right blend of Concept & Location.The 20 acres of lush green villa community has three different types of villa on offering with well thought through amenities like a man-made waterfall, state of the art clubhouse, 20ft high Buddha statue & serene Zen garden. This landmark project is located just off Bannerghatta road & also well connected to all major hubs of the city.
                    </p>
                    <p>The Silicon Valley of India, Bengaluru, boosts the corridors’ development, like the Bannerghatta Road, which branches trhe Hosur Road and ends in Anekal Town. Of the upscale residential hubs in Bengaluru, the locality around Bannerghatta Road has lured people from different parts of the city.</p>
                    <p>Located amidst the city’s top social infrastructure and offering unmatched connectivity to various landmarks, the address has created a boom in the real estate vertical, ushering you into a land of comforts and high demand. The new series of villas are part of a thriving community, adding a contemporary edge to lifestyle.</p>
                    <p>Located off Nice road, easy access to E-city and Hosur, Kanakapura, Mysore and Tumkur road.</p>
                    <p>The project will have an elaborate Clubhouse with spaces for Health Club, Gymnasium, and Swimming Pool with kids Pool, Jacuzzi, Library, Lounger Bar and Cafeteria, Community Hall, Indoor games, Billiard, Table Tennis, Crèche, Jamming room, Hobby room and provision for a Convenience Store etc.</p>
                  </Col>
                </Row>
              </Container>
            </div>

            <EdenMasterPlan />

            <div className="py-3 py-md-5" id="amenites">
             <PurvaSparklingsAmenities />
            </div>
            <div className="py-3 py-md-5" id="pricing">
              <Container fluid className="ps-0 pe-0">
                <Row>
                  <EdenPrice />
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
      <OtherProjectsPurvaSparklings />
      <FixedIcons />
    </div>
  )
}

export default PurvaSparklings