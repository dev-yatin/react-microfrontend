import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

// To prevent css class names conflict in production when different microforntend deployed
const generateClassName = createGenerateClassName({
  productionPrefix: "mar",
});

const SiteRoutes = () => {
  return (
    <React.Fragment>
      <StylesProvider generateClassName={generateClassName}>
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
      </StylesProvider>
    </React.Fragment>
  );
};

export default SiteRoutes;
