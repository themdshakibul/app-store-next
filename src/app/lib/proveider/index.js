import ContextApi from "@/Context/ContextApi";
import React from "react";

const Proverder = ({ children }) => {
  return <ContextApi>{children}</ContextApi>;
};

export default Proverder;
