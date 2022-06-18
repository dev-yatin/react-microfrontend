import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";
import React, { useLayoutEffect, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";

// To prevent css class names conflict in production when different microforntend deployed
const generateClassName = createGenerateClassName({
  productionPrefix: "auth",
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

  console.log(history.location.pathname);

  return (
    <React.Fragment>
      <StylesProvider generateClassName={generateClassName}>
        <Router
          navigator={history}
          location={historyState.location}
          navigationType={historyState.action}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Signin />} />
          </Routes>
        </Router>
      </StylesProvider>
    </React.Fragment>
  );
};

export default SiteRoutes;
