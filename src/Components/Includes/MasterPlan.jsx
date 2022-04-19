import React, { useState } from "react";
import { Container,  Tab, Tabs } from "react-bootstrap";
import EdenParkPlans from "./EdenParkPlans";
import AvalonParkPlans from "./AvalonParkPlans";
import MeridianParkPlans from "./MeridianParkPlans";

const MasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div id="master-plan" className="pt-3 pb-3 pt-md-5 pb-md-5">
      <h2 className="pt-2 pb-2 text-center text-primary fs-4">
        Launching Projects Master & Floor Plans
      </h2>
      <Container fluid className="ps-0 pe-0">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="mb-3 text-dark"
        >
        <Tab eventKey="all" title="Mahindra">
          {<MeridianParkPlans />}
        </Tab>
          <Tab eventKey="three-bhk" title="Purva Sparklings" className="text-dark">
            <EdenParkPlans />
          </Tab>
          <Tab
            eventKey="master-plan"
            title="Valmark Apas"
            className="text-dark"
          >
            <AvalonParkPlans />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default MasterPlan;
