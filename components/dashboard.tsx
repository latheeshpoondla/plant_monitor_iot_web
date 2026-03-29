"use client";

import { useEffect, useState } from "react";
import SensorCard from "./sensorcard";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

  const fetchData = async () => {
    const res = await fetch("/api/plant_data");
    const json = await res.json();
    setData(json);
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
        value={data.soil_moisture}
        unit="%"
        color="bg-blue-500"
      />

      <SensorCard
        title="Temperature"
        value={data.temperature}
        unit="°C"
        color="bg-red-500"
      />

      <SensorCard
        title="Humidity"
        value={data.humidity}
        unit="%"
        color="bg-green-500"
      />
    </div>
  );
}