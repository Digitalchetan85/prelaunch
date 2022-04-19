import React from 'react'
import { Col, Container, Row } from "react-bootstrap";

const PurvaSparklingsAmenities = () => {
  return (
    <div id="amenities" className="py-3 py-md-5">
      <Container>
        <Row className="justify-content-center">
          <h2 className="text-primary text-center py-2"> Amenities</h2>
          <Col md={12} className="pt-3 pb-3 pt-md-2 pb-md-2">
            {/* <h4 className="text-primary">Indoor Amenities</h4> */}
            <Row className="justify-content-center">
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                {/* <img src="./images/amenities/club.png" alt="Purva Sparkling Springs Clubhouse"
                            class="img-fluid p-2"> */}
                  <i className="fa-solid fa-building-columns fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                  Clubhouse
                  </h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                {/* <img src="./images/amenities/swimmer.png" alt="Purva Sparkling Springs Swimming Pool"
                            class="img-fluid p-2"> */}
                  <i className="fa-solid fa-table-tennis-paddle-ball fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">Swimming Pool</h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                {/* <img src="./images/amenities/exercise.png" alt="Purva Sparkling Springs Gymanasium"
                            class="img-fluid p-2"> */}
                  <i className="fa-solid fa-spa fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">Gymanasium</h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                {/* <img src="./images/amenities/tennis-court.png" alt="Purva Sparkling Springs Tennis Court"
                            class="img-fluid p-2"> */}
                  <i className="fa-solid fa-photo-film fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">Tennis Court</h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                {/* <img src="./images/amenities/basket-ball.png" alt="Purva Sparkling Springs Basketball"
                            class="img-fluid p-2"> */}
                  <i className="fa-solid fa-building-user fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">Basketball Court</h6>
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                {/* <img src="./images/amenities/cricket.png" alt="Purva Sparkling Springs Cricket Nets"
                            class="img-fluid p-2"> */}
                  <i className="fa-solid fa-dumbbell fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                  Cricket Nets
                  </h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                {/* <img src="./images/amenities/garden.png" alt="Purva Sparkling Springs Zen Garden"
                            class="img-fluid p-2"> */}
                  <i className="fa-solid fa-chess-board fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                    <i className=""></i>
                    Zen Garden
                  </h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                {/* <img src="./images/amenities/party-lawn.png" alt="Purva Sparkling Springs Party Lawn"
                            class="img-fluid p-2"> */}
                  <i className="fa-solid fa-store fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                  Party Lawn
                  </h6>
                </div>
              </Col>
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div
                  className="text-center bg-primary rounded p-4" style={{ height: "150px" }}>
                    {/* <img src="./images/amenities/playground.png" alt="Purva Sparkling Springs Childrens Play Area"
                            class="img-fluid p-2"></img> */}
                  <i className="fas fa-baseball-ball fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2">
                  Childrens Play Area
                  </h6>
                </div>
              </Col>
              
              <Col md={2} xs={6} className="py-3 py-md-3">
                <div
                  className="text-center bg-primary rounded p-4" style={{ height: "150px" }}
                >
                     {/* <img src="./images/amenities/pets.png" alt="Purva Sparkling Springs Pets Park"
                            class="img-fluid p-2"></img> */}
                  <i className="fas fa-baseball-ball fs-1 text-white"></i>
                  <h6 className="text-center text-white py-2"> Pet Park
                  </h6>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default PurvaSparklingsAmenities