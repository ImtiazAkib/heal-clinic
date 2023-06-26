import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className="btn border-transparent linear-primary text-white">
      {children}
    </button>
  );
};

export default PrimaryButton;
