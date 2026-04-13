"use client";

import { useEffect, useState } from "react";
import SensorCard from "./sensorcard";

export default function Dashboard() {
  const [data, setData] = useState<any>(null);

const fetchData = async () => {
  try {
    const res = await fetch("/api/plant_data");

    if (!res.ok) throw new Error("HTTP error");

    const json = await res.json();

    const latest = Array.isArray(json)
      ? json[json.length - 1]
      : json;

    setData(latest);

  } catch (err) {
    console.error("Fetch failed:", err);
  }
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
        title="Soil Resistance"
        value={data.soilRaw}
        unit=""
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

      <SensorCard
        title="Health Status"
        value={data.status}
        unit=""
        color="bg-orange-500"
      />
    </div>
  );
}