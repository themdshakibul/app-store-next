"use client";

import { InstallAppContext } from "@/Context/ContextApi";
import { useContext } from "react";
import { toast } from "react-toastify";

const InstallBtn = ({ app }) => {
  const { installApp, setInstallApp } = useContext(InstallAppContext);

  const handelInstall = () => {
    const alreadyInstalled = installApp.find((item) => item.id === app.id);

    if (alreadyInstalled) {
      toast.error(`${app.title} already installed!`);
      return;
    }

    setInstallApp([...installApp, app]);
    toast.success(`${app.title} successfully installed!`);
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
