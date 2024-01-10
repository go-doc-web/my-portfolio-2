import React from "react";

const SectionComponent = ({ className = "", children }) => {
  return <section className={`${className} `}>{children}</section>;
};

export default SectionComponent;
