import { Vehicle } from "../types/Vehicle";

const API_KEY = "YOUR_CARAPI_KEY"; // Replace with your real key
const BASE_URL = "https://api.carapi.co.uk";

export async function fetchVehicleData(reg: string): Promise<Vehicle | null> {
  try {
    const response = await fetch(
      `${BASE_URL}/vehicle?key=${API_KEY}&vrm=${encodeURIComponent(reg)}`
    );

    if (!response.ok) {
      console.error("API Error:", response.status);
      return null;
    }

    const data = await response.json();

    if (!data || !data.data) {
      return null;
    }

    const car = data.data;

    return {
      registration: car.registration,
      make: car.make,
      model: car.model,
      year: parseInt(car.year_of_manufacture),
      fuelType: car.fuel_type,
      color: car.colour,
    };
  } catch (error) {
    console.error("Error fetching vehicle data:", error);
    return null;
  }
}
