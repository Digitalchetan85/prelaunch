import React, { useState } from "react";
import { Button, Col, Row, Table } from "react-bootstrap";
import MahindraEdenModal from "./MahindraEdenModal";
import MeridianModal from "./MahindraEdenModal";

const MahindraEdenPrice = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Row className="justify-content-center">
        <Col md={12} xs={12}>
          <div className="">
            <h2 className="text-primary text-center py-3 fs-3">Mahindra Eden - Pricing</h2>
            <Table
              responsive="sm"
              className="align-middle text-center border-transparent"
              striped
              bordered
              hover
            >
              <thead>
                <tr>
                  <th>BHK</th>
                  <th>Area (Sq.ft)</th>
                  <th>Price</th>
                  <th>Cost Sheet</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1 BHK</td>
                  <td>600</td>
                  <td>47 Lac Onwards</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Sheet
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2 BHK</td>
                  <td>1200</td>
                  <td>90Lac Onwards</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Sheet
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>3 BHK</td>
                  <td>1600 - 1800</td>
                  <td>1.3Cr Onwards</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Sheet
                    </Button>
                  </td>
                </tr>
                
                <tr>
                  <td>3 BHK + Study</td>
                  <td>2000</td>
                  <td>1.65Cr Onwards</td>
                  <td>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i> Price Sheet
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>

      <MahindraEdenModal
        show={show}
        handleClose={handleClose}
        title="Download Pricesheet"
        projectid="57a99891-ec20-472a-b230-187e20fee71f"
      />
    </div>
  );
};

export default MahindraEdenPrice;
