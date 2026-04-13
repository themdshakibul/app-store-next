"use client";
import { useContext } from "react";
import { InstallAppContext } from "@/Context/ContextApi";
import UseData from "@/Hooks/UseData";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const DeshBordPage = () => {
  const { installApp } = useContext(InstallAppContext);
  const { apps } = UseData();

  const unstallApps = apps.length - installApp.length;

  const data = [
    { name: "Install Apps", value: installApp.length, fill: "#0088FE" },
    { name: "Unstall Apps", value: unstallApps, fill: "#00C49F" },
  ];

  return (
    <div className="container mx-auto px2 flex flex-col items-center justify-center">
      <header>
        <h2 className="text-4xl font-black py-5">
          Install Apps an Unstall apps
        </h2>
      </header>
      <PieChart
        style={{
          width: "100%",
          maxWidth: "500px",
          maxHeight: "80vh",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius="50%"
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default DeshBordPage;
