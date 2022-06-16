import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const SiteRoutes = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Landing />} />
          </Route>
          <Route path="/pricing">
            <Route index element={<Pricing />} />
          </Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default SiteRoutes;
