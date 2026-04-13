"use client";

import { SyncLoader } from "react-spinners";

const loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      <SyncLoader size={20} color="#06b6d4" />

      <h2 className="text-2xl font-bold text-gray-700 animate-pulse">
        Loading App ...
      </h2>
    </div>
  );
};

export default loading;
