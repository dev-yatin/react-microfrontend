import { createBrowserHistory, createMemoryHistory } from "history";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath || "/"],
    });
  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(
    <React.Fragment>
      <App history={history} />
    </React.Fragment>,
    el
  );

  return {
    onParentNavigate: ({ location: parentLocation }) => {
      console.log("marketing", parentLocation, history.location);
      if (parentLocation.pathname !== history.location.pathname) {
        history.push(parentLocation.pathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-root");
  if (!!el) {
    // Assuming then app running in isolation
    // Purpose of defaultHistory is that if we run in dev mode, we can use browser history
    // To view changes in path otherwise we can use Memory history in prod.
    mount(el, { defaultHistory: createBrowserHistory() });
  }
}
