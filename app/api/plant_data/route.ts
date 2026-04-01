import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://pmiot-backend-ewb7g7aab9a3fdac.centralindia-01.azurewebsites.net/api/data");

    const data = await res.json();

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Failed to fetch backend" }, { status: 500 });
  }
}