import React from "react";
import SiteRoutes from "./SiteRoutes";

const App = ({ history }) => {
  return (
    <React.Fragment>
      <SiteRoutes history={history} />
    </React.Fragment>
  );
};

export default SiteRoutes;
