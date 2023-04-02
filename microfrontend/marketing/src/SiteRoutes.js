import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import React, { useLayoutEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

// To prevent css class names conflict in production when different microforntend deployed
const generateClassName = createGenerateClassName({
  productionPrefix: "mar",
});

const SiteRoutes = ({ history }) => {
  const [historyState, setHistroyState] = useState({
    location: history.location,
    action: history.action,
  });

  useLayoutEffect(() => {
    const unlisten = history.listen((history) => {
      setHistroyState({
        location: history.location,
        action: history.action,
      });
    });
    return unlisten;
  }, [history]);

  return (
    <React.Fragment>
      <StylesProvider generateClassName={generateClassName}>
        <Router
          navigator={history}
          location={historyState.location}
          navigationType={historyState.action}
        >
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
