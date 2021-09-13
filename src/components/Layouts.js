import React from "react";
import Header from "./Header";

const Layouts = ({ children }) => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layouts;
