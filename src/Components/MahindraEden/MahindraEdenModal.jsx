import React, { useState } from "react";
import { Button, Modal, Row, Col, Image } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Logo from "../../images/logo-1.png";
import {useNavigate} from "react-router-dom";

const MahindraEdenModal = (props) => {
  const [formStatus, setformStatus] = useState("");
  const navigate = useNavigate("/success");

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    id:""
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().required("required").email("Invalid email format"),
    phone: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone No is not valid")
      .min(10, "Phone No Minimum 10 Digits")
      .max(10, "Phone No Minimum 10 Digits"),
  });


  const onSubmit = (values) => {
    let data = values;

    console.log(data);

    axios
      .get(
        "https://mahindra-eden.prelaunchprop.in/Email/email.php?sendto=" +
          data.email +
          "&name=" +
          data.name +
          "&phone=" +
          data.phone
      )
      .then(function (response) {
        // console.log(response);
        setformStatus(response.data);
        axios.post(
          "https://buildeskapi.azurewebsites.net/api/Webhook",
          (data = {
            apikey: "902cb429-2dcc-4176-9958-a8610a354817",
            firstname: data.name,
            lastname: "",
            source: "Pre-Launch Prop",
            mobile: data.phone,
            CreatedDate: "14/02/2022",
            email: data.email,
            Remark: "Brochure Downloaded",
            HasVisitScheduled: "false",
            VisitDate: "null",
          })
        );
      })
      .catch(function (error) {
        // console.log(error);
        setformStatus(error.data);
      });
  };
  return (
    <div>
      <Modal show={props.show} onHide={props.handleClose} centered id="cre">
        <Modal.Header closeButton className="border-0 bg-primary">
          <Modal.Title className="text-white text-titlecase border-0">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center py-3">
            <Image src={Logo} alt="" className="img-fluid" />
          </div>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form className="p-3">
              <Row className="mb-3">
                {/* <Col md={2} className="p-0">
                  <div className="text-end py-2">
                    <FontAwesomeIcon
                      icon="fas fa-user"
                      className="border-0 fs-4 rounded text-primary"
                    />
                  </div>
                </Col> */}
                <Col md={12}>
                  <div className="mb-3">
                    <Field
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                    <small className="text-danger">
                      <ErrorMessage name="name" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                {/* <Col md={2} className="p-0">
                  <div className="text-end py-2">
                    <FontAwesomeIcon
                      icon="fas fa-envelope"
                      className="border-0 fs-4 rounded text-primary"
                    />
                  </div>
                </Col> */}
                <Col md={12}>
                  <div className="mb-3">
                    <Field
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    <small className="text-danger">
                      <ErrorMessage name="email" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                {/* <Col md={2}>
                  <div className="text-center">
                    <CountryDropdown
                      id="UNIQUE_ID"
                      className="YOUR_CSS_CLASS form-control border ps-0 pe-3 py-2"
                      preferredCountries={["in", "gb"]}
                      value=""
                      handleChange={(e) => console.log(e.target.value)}
                    ></CountryDropdown>
                  </div>
                </Col> */}
                <Col md={12}>
                  <div className="mb-3">
                    <Field
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                    />

                    <small className="text-danger">
                      <ErrorMessage name="phone" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                {/* <Col md={2}>
                  <div className="text-center">
                    <CountryDropdown
                      id="UNIQUE_ID"
                      className="YOUR_CSS_CLASS form-control border ps-0 pe-3 py-2"
                      preferredCountries={["in", "gb"]}
                      value=""
                      handleChange={(e) => console.log(e.target.value)}
                    ></CountryDropdown>
                  </div>
                </Col> */}
                <Col md={12}>
                  <div className="">
                    <Field
                      type="hidden"
                      className="form-control"
                      id="id"
                      name="id"
                      placeholder="Phone number"
                      value={props.projectid}
                    />

                    <small className="text-danger d-none">
                      <ErrorMessage name="id" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="">
                <Col md={12}>
                  {formStatus ? (
                    <div className="alert alert-success p-3 text-center">
                      {formStatus}
                    </div>
                  ) : null}
                </Col>
              </Row>
              <Row className="">
                <Col md={12}>
                  <div className="">
                    <Button
                      className="btn btn-success text-white text-uppercase form-control"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default MahindraEdenModal;
