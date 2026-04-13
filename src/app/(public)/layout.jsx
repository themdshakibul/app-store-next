import Footer from "@/Components/Shared/Footer";
import NavBar from "@/Components/Shared/NavBar";
import React from "react";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default PublicLayout;
