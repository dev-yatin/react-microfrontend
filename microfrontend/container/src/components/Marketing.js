import { mount } from "marketing/Marketing";
import React, { useEffect, useRef } from "react";

const Marketing = () => {
  const marketingElement = useRef(null);
  useEffect(() => {
    if (marketingElement.current) {
      mount(marketingElement.current);
    }
  }, []);
  return (
    <React.Fragment>
      <div ref={marketingElement}></div>
    </React.Fragment>
  );
};

export default Marketing;
