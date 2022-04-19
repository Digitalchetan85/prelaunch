import React, { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import MahindraEdenAllImages from "./MahindraEdenAllImages";
import MahindraEdenFloorplan from "./MahindraEdenFloorplan";
import MahindraEdenMasterPlanImages from "./MahindraEdenMasterPlanImages";

const MahindraEdenMasterPlan = () => {
  const [key, setKey] = useState("all");

  return (
    <div>
      <h2 className="pt-2 pb-2 text-center text-primary fs-4">
        Mahindra Eden Master & Floor Plans
      </h2>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3 text-dark"
      >
        <Tab eventKey="all" title="All" className="text-dark">
          <MahindraEdenAllImages />
        </Tab>
        <Tab eventKey="matster-plan" title="Master Plan" className="text-dark">
          <MahindraEdenMasterPlanImages />
        </Tab>
        <Tab eventKey="three-bhk" title="Floor-Plan">
          {<MahindraEdenFloorplan />}
        </Tab>
      </Tabs>
    </div>
  );
};

export default MahindraEdenMasterPlan;
