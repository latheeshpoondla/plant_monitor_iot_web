"use client";

import { useEffect, useState } from "react";
import SensorCard from "./sensorcard";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const res = await fetch("https://pmiot-backend-ewb7g7aab9a3fdac.centralindia-01.azurewebsites.net/api/data");
    const json = await res.json();
    const latest = json[json.length - 1];

    setData(latest);

  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000); // refresh every 5s
    return () => clearInterval(interval);
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="grid md:grid-cols-3 gap-6">
      <SensorCard
        title="Soil Moisture"
        value={data.soilRaw}
        unit="%"
        color="bg-blue-500"
      />

      <SensorCard
        title="Soil Moisture Percent"
        value={data.soilPercent}
        unit="%"
        color="bg-yellow-500"
      />

      <SensorCard
        title="Temperature"
        value={data.temp}
        unit="°C"
        color="bg-red-500"
      />

      <SensorCard
        title="Humidity"
        value={data.humidity}
        unit="%"
        color="bg-green-500"
      />

      <SensorCard
        title="Timestamp"
        value={data.timestamp}
        unit=""
        color="bg-purple-500"
      />
    </div>
  );
}