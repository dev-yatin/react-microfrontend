import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

export const mount = (el) => {
  return ReactDOM.render(
    <React.Fragment>
      <App />
    </React.Fragment>,
    el
  );
};

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#_marketing-root");
  if (!!el) {
    // Assuming then app running in isolation
    mount(el);
  }
}
