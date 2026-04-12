import React, { useEffect, useState } from "react";

function UseData() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();

      setTimeout(() => {
        setApps(data);
        setLoadig(false);
      }, 100);
    };
    fetchData();
  }, []);

  return { apps };
}

export default UseData;
