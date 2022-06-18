import { mount } from "marketing/Marketing";
import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Marketing = ({ history }) => {
  const marketingElement = useRef(null);
  const navigate = useNavigate();

  const onNavigate = ({ location: microfrontendLocation }) => {
    if (history.location.pathname !== microfrontendLocation.pathname) {
      navigate(microfrontendLocation.pathname);
    }
  };

  useEffect(() => {
    let unlisten = () => {};
    if (marketingElement.current) {
      const { onParentNavigate } = mount(marketingElement.current, {
        onNavigate,
        initialPath: history.location.pathname,
      });
      if (!!onParentNavigate) {
        unlisten = history.listen((history) => {
          onParentNavigate(history);
        });
      }
    }
    return unlisten;
  }, []);
  return (
    <React.Fragment>
      <div ref={marketingElement}></div>
    </React.Fragment>
  );
};

export default Marketing;
