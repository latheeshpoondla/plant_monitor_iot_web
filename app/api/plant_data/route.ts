import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    plant_id: "plant_1",
    soil_moisture: Math.floor(Math.random() * 100),
    temperature: (20 + Math.random() * 10).toFixed(1),
    humidity: Math.floor(40 + Math.random() * 40),
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data);
}