"use client";

import { InstallAppContext } from "@/Context/ContextApi";
import { useContext } from "react";

const InstallBtn = ({ app }) => {
  const somthing = useContext(InstallAppContext);
  console.log(somthing, "somthing ");

  const handelInstall = () => {
    console.log("hand", handelInstall);
  };

  return (
    <div>
      <button
        onClick={handelInstall}
        className="btn btn-success btn-lg px-10 font-bold text-white shadow-md hover:shadow-lg transition-all"
      >
        Install Now ({app.size} MB)
      </button>
    </div>
  );
};

export default InstallBtn;
