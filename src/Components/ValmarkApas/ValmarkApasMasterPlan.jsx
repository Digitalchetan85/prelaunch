import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import AvalonAllImages from "./ValmarkApasAllImages";
import ValmarkApasThreeBhk from "./ValmarkApasThreeBhk"
import AvalonFourBhk from "./ValmarkApasFourBhk";
import ValmarkApasMasterPlanImages from "./ValmarkApasMasterPlanImages";
const ValmarkApasMasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div>
      <h2 className="pt-2 pb-2 text-center text-primary fs-3">
        Purva Sparklings Master & Floor Plans
      </h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark"
      >
        <Tab eventKey="all" title="All" className="text-dark">
          <AvalonAllImages />
        </Tab>
        <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
          <ValmarkApasMasterPlanImages />
        </Tab>
        <Tab eventKey="three-bhk" title="3BHK">
          <ValmarkApasThreeBhk />

        </Tab>
        <Tab eventKey="four-bhk" title="4BHK">
          <AvalonFourBhk />
        </Tab>
      </Tabs>
    </div>
  );
};

export default ValmarkApasMasterPlan;
